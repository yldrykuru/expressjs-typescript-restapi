# ExpressJS TypeScript MVC

A simple Express.js project structure with TypeScript and MVC pattern.

![ExpressJS TypeScript MVC](banner.jpeg)

## Description

This project provides a foundational structure for building web applications with Express.js and TypeScript, following the MVC (Model-View-Controller) design pattern. It offers an organized and scalable architecture to kickstart your development.

## Features

- **Express.js and TypeScript**: Harness the power of Express.js with TypeScript.
- **MVC Design Pattern**: Organize your code with clear separation of concerns.
- **Sequelize ORM Integration**: Easily interact with databases using Sequelize.
- **Example Controllers, Models, and Services**: Get started quickly with provided examples.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/expressjs-typescript-mvc.git
   cd expressjs-typescript-mvc
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```
4. Import SQL File
5. Copy the .env.example file in the project to create a new .env file.
6. Import Postman Collection


## API Endpoints
1. Auto-generate Programming Languages
Request: GET http://localhost:3000/api/v1/programming-languages/auto/generate
2. Get Programming Language by ID
Request: GET http://localhost:3000/api/v1/programming-languages/1
3. Create Programming Language
Request: POST http://localhost:3000/api/v1/programming-languages
```json
{
  "name": "JavaScript",
  "released_year": "1995",
  "githut_rank": "1",
  "pypl_rank": "1",
  "tiobe_rank": "1"
}
```
1. Update Programming Language by ID
Request: PUT http://localhost:3000/api/v1/programming-languages/1
```json
{
  "name": "JavaScript",
  "released_year": "1996",
  "githut_rank": "2",
  "pypl_rank": "3",
  "tiobe_rank": "4"
}
```
1. Delete Programming Language by ID
Request: DELETE http://localhost:3000/api/v1/programming-languages/1
   

## Usage
The project structure follows the MVC design pattern. Customize controllers, models, and services according to your application's needs.

## Scripts
npm start: Start the development server with automatic restart on file changes.
npm run build: Compile TypeScript files to JavaScript.
npm run lint: Run ESLint for code linting and auto-fixing.
npm test: Placeholder for running tests.

## Contributing
Feel free to contribute to this project. Create issues, fork the repository, and submit pull requests to enhance or extend functionality.

## License
This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for more information.
