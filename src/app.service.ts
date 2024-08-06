import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	getUsers() {
		return [{ is: 1, name: 'Vitalii' }]
	}
}
