import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreatePostDto } from './dto/create-post.dto'
import { Post } from './posts.model'

@Injectable()
export class PostsService {
	constructor(@InjectModel(Post) private postRepository: typeof Post) {}

	async create(dto: CreatePostDto, image: any) {
		const fileName = '12345'
		const post = await this.postRepository.create({ ...dto, image: fileName })
		return post
	}
}
