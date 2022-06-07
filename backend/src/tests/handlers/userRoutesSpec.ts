import supertest from 'supertest';

import app from '../../server';

import { User, UserStore } from '../../models/user';

import Client from '../../database';

const store = new UserStore();

const request = supertest(app);

let token = '';

describe('User API Endpoints', () => {
  const user = {
    user_name: 'testUser',
    first_name: 'Test',
    last_name: 'User',
    email: 'test@test.com',
    password: 'test1234',
    address: '18st Hadyak ELkoba ',
    phone: '+201001656801',
  } as User;

  beforeAll(async () => {
    const createdUser = await store.create(user);
    user.id = createdUser.id;
  });

  afterAll(async () => {
    // clean db
    const conn = await Client.connect();
    const sql = 'DELETE FROM users;';
    await conn.query(sql);
    conn.release();
  });

  describe('Test Authenticate methods', () => {
    it('should be able to authenticate to get token', async () => {
      const res = await request
        .post('/users/authenticate')
        .set('Content-type', 'application/json')
        .send({
          email: 'test@test.com',
          password: 'test1234',
        });
      expect(res.status).toBe(200);
      const { id, email, token: userToken } = res.body.data;
      expect(id).toBe(user.id);
      expect(email).toBe('test@test.com');
      token = userToken;
    });

    it('should be failed to authenticate with wrong email', async () => {
      const res = await request
        .post('/users/authenticate')
        .set('Content-type', 'application/json')
        .send({
          email: 'wrong@email.com',
          password: 'test1234',
        });
      expect(res.status).toBe(401);
    });
  });

  describe('Test CRUD API methods', () => {
    it('should create new user', async () => {
      const res = await request
        .post('/users')
        .set('Content-type', 'application/json')
        .send({
          user_name: 'testUserTwo',
          first_name: 'TestTwo',
          last_name: 'UserTwo',
          email: 'test2@test.com',
          password: 'test1234',
          address: '18st Hadyak ELkoba ',
          phone: '+201001656801',
        } as User);
      expect(res.status).toBe(200);
      const { user_name, email, role } = res.body.data;
      expect(email).toBe('test2@test.com');
      expect(user_name).toBe('testUserTwo');
      expect(role).toBe('user');
    });

    it('should get list of users', async () => {
      const res = await request
        .get('/users')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(2);
    });

    it('should get user info', async () => {
      const res = await request
        .get(`/users/${user.id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
      expect(res.body.data.user_name).toBe('testUser');
      expect(res.body.data.email).toBe('test@test.com');
    });

    it('should update user info', async () => {
      const res = await request
        .patch(`/users/${user.id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          id: user.id,
          user_name: 'ahmedsaad',
          first_name: 'Ahmed',
          last_name: 'Saad',
          email: user.email,
          password: user.password,
          address: user.address,
          phone: user.phone,
        });
      expect(res.status).toBe(200);

      const { user_name, role, email } = res.body.data;
      expect(email).toBe(user.email);
      expect(user_name).toBe('ahmedsaad');
      expect(role).toBe('user');
    });

    it('should delete user', async () => {
      const res = await request
        .delete(`/users/${user.id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe(user.id);
      expect(res.body.data.user_name).toBe('ahmedsaad');
    });
  });
});
