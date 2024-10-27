NEST.JS REST API + PostgreSQL

BACKEND STACK:

1. NestJS
2. Node.js
3. PostgreSQL
4. Sequelize
5. Swagger
6. Docker

ENDPOINTS:

1. http://localhost:5000/api/docs
2. http://localhost:5000/users (Post, GetAll with ADMIN role)
   1. http://localhost:5000/users/role (Post - add new role with ADMIN role)
   2. http://localhost:5000/users/ban (Post - add to ban with ADMIN role)
3. http://localhost:5000/auth/registration
4. http://localhost:5000/auth/login
5. http://localhost:5000/roles (Post, GetByValue)
6. http://localhost:5000/posts (Post)

Stages of project development:

1. v0.2 PostgreSQL. Sequelize. Connecting to the database.
2. v0.2.5 User Model, scheme of how the user will be saved in the database
3. v0.3 Users endpoint: (/users) Post, GetAll. Work with database
4. v0.4 API documentation. Swagger. Api endpoint: (/api/docs)
5. v0.5 Users roles. Roles endpoint: (/roles) Post, GetByValue
6. v0.6 AuthModule. Registration. Authorization. JWT Token. Auth endpoint: (/auth) /login /registration
7. v0.7 Guards. CanActivate. Restricting access to GetAllUsers in user.controller to unauthorized users.
8. v0.8 RolesGuard. Roles decorator. Restricting access to GetAllUsers in user.controller without ADMIN role.
9. v0.9 Add users role. Banning user. Endpoints /users/ban /users/role
10. v0.9.3 Pipes. Input validation. Class-validator. @IsString, @IsEmail, @Length
11. v0.9.14 Posts. One-to-many. @HasMany. FileService. Working with files. Distribution of static.
12. v1.0.0 NEST.JS REST API (/users /roles /auth /posts /users/ban /users/role)
