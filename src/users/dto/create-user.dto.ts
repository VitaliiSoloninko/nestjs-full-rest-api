import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
	@ApiProperty({ example: 'user@gmail.com', description: 'E-mail' })
	@IsString({ message: 'Should be string' })
	@IsEmail({}, { message: 'Incorrect e-mail' })
	readonly email: string
	@ApiProperty({ example: '12345678', description: 'Password' })
	@IsString({ message: 'Should be string' })
	@Length(4, 16, { message: 'Min 4 and max 16 characters' })
	readonly password: string
}
