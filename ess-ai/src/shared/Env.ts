// useChat()

import { configDotenv } from 'dotenv';
configDotenv();



const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  console.error('JWT_SECRET is not defined');
  process.exit(1);
}

const SERVER_PORT = Number.parseInt(process.env.SERVER_PORT as string) || 3000;

if (typeof SERVER_PORT !== 'number') {
  console.error('SERVER_PORT is not a number.');
  process.exit(1);
}

const MONGO_CONN_STR = process.env.MONGO_CONN_STR as string;

if (!MONGO_CONN_STR) {
  console.error('MONGO_CONN_STR is not defined.');
  process.exit(1);
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;

if (!OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is not defined.');
  process.exit(1);
}

export { JWT_SECRET, SERVER_PORT, MONGO_CONN_STR, OPENAI_API_KEY };

// documente esse codigo com comentatios
