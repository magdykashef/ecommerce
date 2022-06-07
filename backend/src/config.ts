import dotenv from 'dotenv';
dotenv.config();
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  ENV,
  POSTGRES_PORT,
  PORT,
  BCRYPT_PASSWORD,
  SALT_ROUNDS,
  TOKEN_SECRET,
} = process.env;

export default {
  PORT: PORT,
  host: POSTGRES_HOST,
  dbPort: POSTGRES_PORT,
  database: ENV === 'dev' ? POSTGRES_DB : POSTGRES_TEST_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  pepper: BCRYPT_PASSWORD,
  salt: SALT_ROUNDS,
  tokenSecret: TOKEN_SECRET,
};
