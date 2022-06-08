import config from './config';
import { Pool } from 'pg';

const Client = new Pool({
  host: config.host,
  port: parseInt(config.dbPort as string, 10),
  database: config.database,
  user: config.user,
  password: config.password,
  max: 10,
});

Client.on('error', (error: Error) => {
  console.error(error.message);
});

export default Client;
