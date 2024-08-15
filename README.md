NEST.JS REST API

ENDPOINTS:
http://localhost:5000/users (Post, GetAll)
http://localhost:5000/api/docs
http://localhost:5000/roles (Post, GetByValue)
http://localhost:5000/auth/registration
http://localhost:5000/auth/login

Stages of project development:
v0.2 PostgreSQL. Sequelize. Connecting to the database.
v0.2.5 User Model, scheme of how the user will be saved in the database
v0.3 Users endpoint: (/users) Post, GetAll. Work with database
v0.4 API documentation. Swagger. Api endpoint: (/api/docs)
v0.5 Users roles. Roles endpoint: (/roles) Post, GetByValue
v0.6 AuthModule. Registration. Authorization. JWT Token. Auth endpoint: (/auth) /login /registration
v0.7 Guards. CanActivate. Restricting access to GetAllUsers in user.controller to unauthorized users.
v0.8 RolesGuard. Roles decorator. Restricting access to GetAllUsers in user.controller without ADMIN role.
