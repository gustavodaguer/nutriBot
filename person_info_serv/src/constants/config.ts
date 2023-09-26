export const CONFIG = {
  ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  STAGE: process.env.STAGE ? process.env.STAGE : 'dev',
  PORT: process.env.PORT ? process.env.PORT : 3000,
  DATABASE: {
    username: process.env.USERNAME ? process.env.USERNAME : 'user',
    password: process.env.PASSWORD ? process.env.PASSWORD : 'pass',
    database: process.env.DATABASE ? process.env.DATABASE : 'db',
    host: process.env.HOST ? process.env.HOST : 'localhost',
  }
} as const