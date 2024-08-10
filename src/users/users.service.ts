import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './users.model'
import { RolesService } from 'src/roles/roles.service'

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User) private userRepository: typeof User,
		private roleService: RolesService
	) {}

	async createUser(dto: CreateUserDto) {
		const user = await this.userRepository.create(dto)
		return user
	}

	async getAllUsers() {
		const users = await this.userRepository.findAll()
		return users
	}
}
