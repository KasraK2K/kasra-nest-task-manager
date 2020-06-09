import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '9290k2k3l',
  database: 'nest',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // FIXME change to false for production
};
