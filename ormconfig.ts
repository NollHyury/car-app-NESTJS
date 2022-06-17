import { ConnectionOptions } from 'typeorm';

const dbConfig = {
  synchronized: false,
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
    });
    break;
  case 'production':
    break;

  default:
    throw new Error('Unknown environment');
}

export default dbConfig as unknown as ConnectionOptions;
