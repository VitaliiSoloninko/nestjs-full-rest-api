import { CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'

export class JwtAuthGuart implements CanActivate {
	constructor(private jwtService: JwtService) {}

	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const req = context.switchToHttp().getRequest()
		try {
			const authHeader = req.headers.authorization
			const bearer = authHeader.split('')[0]
			const token = authHeader.split('')[1]

			if (bearer !== 'Bearer' || !token) {
				throw new UnauthorizedException({'User is not authorized'})
			}

			const user =this.jwtService.verify(token)

		} catch (e) {
			throw new UnauthorizedException({'User is not authorized'})
		}
	}
}
