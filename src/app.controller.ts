import { Controller, Get } from '@nestjs/common'

@Controller('/api')
export class AppController {
	@Get('/users')
	getUsers() {
		return [{ is: 1, name: 'Vitalii' }]
	}
}
