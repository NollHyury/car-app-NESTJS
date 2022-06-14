import { rm } from 'fs/promises';
import { join } from 'path';
import { getConnection } from 'typeorm';

global.beforeEach(async () => {
  try {
    await rm(join(__dirname, '..', 'text.sqlite'));
  } catch (error) {}
});

global.afterEach(async () => {
  const conn = getConnection();
  conn.close();
});
