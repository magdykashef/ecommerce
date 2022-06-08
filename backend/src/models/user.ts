import bcrypt from 'bcrypt';

import Client from '../database';

import config from '../config';

enum status { active, deactivated, suspended };
enum role { user, admin }

export type User = {
  user_id?: string;
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  register_date?: Date;
  address: string;
  phone: string;
  role?: role;
  status?: status
};

const hashPassword = (password: string) => {
  const salt = parseInt(config.salt as string, 10);
  return bcrypt.hashSync(`${password}${config.pepper}`, salt);
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (error) {
      throw new Error(`unable get users: ${(error as Error).message}`);
    }
  }

  async show(id: string): Promise<User> {
    try {
      const sql =
        'SELECT user_name, first_name, last_name, email, address, phone FROM users WHERE user_id=($1)';

      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(`unable show user: ${(error as Error).message}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const conn = await Client.connect();

      const sql =
        'INSERT INTO users (user_name, first_name, last_name, email, password, phone, address, role, status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING user_id, user_name, email, role, status';

      const result = await conn.query(sql, [
        u.user_name,
        u.first_name,
        u.last_name,
        u.email,
        hashPassword(u.password),
        u.phone,
        u.address,
        role[0],
        status[0]
      ]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (error) {
      throw new Error(
        `unable create user (${u.user_name}): ${(error as Error).message}`
      );
    }
  }

  async update(u: User): Promise<User> {
    try {
      const connection = await Client.connect();

      const sql =
        'UPDATE users SET user_name=($2), first_name=($3),last_name=($4), password=($5), address=($6), phone=($7) WHERE user_id=($1) RETURNING user_id, user_name, email, role, status';

      const result = await connection.query(sql, [
        u.user_id,
        u.user_name,
        u.first_name,
        u.last_name,
        hashPassword(u.password),
        u.address,
        u.phone,
      ]);

      connection.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update ${u.user_name} with the following error: ${
          (error as Error).message
        }`
      );
    }
  }

  async delete(id: string): Promise<User> {
    try {
      const conn = await Client.connect();

      const sql =
        'DELETE FROM users WHERE user_id=($1) RETURNING user_id, user_name, email, role, status';

      const result = await conn.query(sql, [id]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (error) {
      throw new Error(`unable delete user: ${(error as Error).message}`);
    }
  }

  async authenticate(email: string, password: string): Promise<User | null> {
    try {
      const conn = await Client.connect();

      const sql = 'SELECT password FROM users WHERE email=($1)';

      const result = await conn.query(sql, [email]);

      if (result.rows.length) {
        const { password: hashPassword } = result.rows[0];
        const isPasswordValid = bcrypt.compareSync(
          `${password}${config.pepper}`,
          hashPassword
        );
        if (isPasswordValid) {
          const user = await conn.query(
            'SELECT user_id, user_name, first_name, last_name, email FROM users WHERE email=($1)',
            [email]
          );
          return user.rows[0];
        }
      }
      conn.release();
      return null;
    } catch (error) {
      throw new Error(`unable to login: ${(error as Error).message}`);
    }
  }
}
