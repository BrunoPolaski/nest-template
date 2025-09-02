import { TypeOrmModule } from '@nestjs/typeorm';

export function initDatabase() {
  return TypeOrmModule.forRoot({
    type: DB_TYPE || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'test',
    entities: [],
    synchronize: true,
  });
}

const DB_TYPE = process.env.DB_TYPE as
  | 'mysql'
  | 'postgres'
  | 'sqlite'
  | 'mariadb'
  | 'mongodb'
  | 'mssql'
  | 'oracle';
