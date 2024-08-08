import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module';

@Module({
	controllers: [],
	providers: [],
	imports: [
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: 'localhost',
			port: 5500,
			username: 'postgres',
			password: 'admin',
			database: 'nest-rest-api',
			models: [],
			autoLoadModels: true,
		}),
		UsersModule,
	],
})
export class AppModule {}
