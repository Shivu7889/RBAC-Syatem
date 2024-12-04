
# Role-Based Access Control (RBAC) System

This project is an implementation of an authentication and authorization system with Role-Based Access Control (RBAC). It enables users to register, log in, and log out securely. Depending on their roles (Admin, Moderator, or User), users can access protected resources. The system utilizes JWT for secure token-based authentication and role-based middleware to restrict access.


## Features

- Secure user registration, login, and logout.
- JWT-based authentication.
- Role-based access to resources.
- Protection of routes using middleware.
- MongoDB as the database.


## Prerequisites
Node.js v16+
MongoDB Atlas or Local MongoDB

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI=your_mongo_connection_string`,

`JWT_SECRET=your_secret_key`



## Installation

Install my-project with npm

```bash
# Clone the repository
git clone https://github.com/yourusername/RBAC-System.git

# Navigate to the project directory
cd RBAC-System

# Install dependencies
npm install

# Run the application
npm start

```
    