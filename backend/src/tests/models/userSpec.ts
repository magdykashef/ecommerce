import { User, UserStore } from '../../models/user';

import Client from '../../database';

const store = new UserStore();

describe('User Model', () => {
  describe('Test methods exists', () => {
    it('should have an Get Many Users method', () => {
      expect(store.index).toBeDefined();
    });

    it('should have a Get One User method', () => {
      expect(store.show).toBeDefined();
    });

    it('should have a Create User method', () => {
      expect(store.create).toBeDefined();
    });

    it('should have a Update User method', () => {
      expect(store.update).toBeDefined();
    });

    it('should have a Delete User method', () => {
      expect(store.delete).toBeDefined();
    });

    it('should have an Authenticate User method', () => {
      expect(store.authenticate).toBeDefined();
    });
  });

  describe('Test User Model Logic', () => {
    const user: User = {
      email: 'test@test.com',
      user_name: 'testUser',
      first_name: 'Test',
      last_name: 'User',
      password: 'test1234',
      address: '18st Hadyak ELkoba',
      phone: '+201001656801',
    };
    let userId: unknown;
    let createdUserTwo: User;
    beforeAll(async () => {
      const createdUser = await store.create(user);
      userId = createdUser.user_id;
    });

    afterAll(async () => {
      const conn = await Client.connect();
      const sql = 'DELETE FROM users;';
      await conn.query(sql);
      conn.release();
    });

    it('Create method should return a New User', async () => {
      createdUserTwo = await store.create({
        user_name: 'test2User',
        first_name: 'Test',
        last_name: 'User',
        email: 'test2@test.com',
        password: 'test1234',
        address: '18st Hadyak ELkoba',
        phone: '+201001656801',
      } as User);

      expect(createdUserTwo).toEqual({
          user_id: createdUserTwo.user_id,
          user_name: 'test2User',
          email: 'test2@test.com',
          role: 'user',
          status: 'active'
        } as unknown as User);
    });

    it('Get Many method should return All available users in DB', async () => {
      const users = await store.index();
      expect(users.length).toBe(2);
    });

    it('Get One method should return testUser when called with ID', async () => {
      const returnedUser = await store.show(createdUserTwo.user_id as string);
      expect(returnedUser.user_name).toBe(createdUserTwo.user_name);
      expect(returnedUser.email).toBe(createdUserTwo.email);
    });

    it('Authenticate method should return the authenticated user', async () => {
      const authenticatedUser = await store.authenticate(
        user.email,
        user.password as string
      );
      expect(authenticatedUser?.user_name).toBe(user.user_name);
      expect(authenticatedUser?.first_name).toBe(user.first_name);
      expect(authenticatedUser?.last_name).toBe(user.last_name);
      expect(authenticatedUser?.email).toBe(user.email);
    });

    it('Authenticate method should return null for wrong credentials', async () => {
      const authenticatedUser = await store.authenticate(
        'ahmed@saad.com',
        'fake-password'
      );
      expect(authenticatedUser).toBe(null);
    });

    it('Update One method should return a user with edited attributes', async () => {
      const updatedUser = await store.update({
        user_id: userId as string,
        user_name: 'testUser Updated',
        first_name: 'Ahmed',
        last_name: 'Saad',
        email: user.email,
        password: user.password,
        address: user.address,
        phone: user.phone,
      });
      expect(updatedUser.user_id).toBe(userId as string);
      expect(updatedUser.user_name).toBe('testUser Updated');
      expect(updatedUser.email).toBe(user.email);
    });

    it('Delete One method should delete user from DB', async () => {
      const deletedUser = await store.delete(userId as string);
      expect(deletedUser.user_id).toBe(userId as string);
    });
  });
});
