# ExpressJS TypeScript REST API

A simple Express.js project structure with TypeScript focusing on building REST APIs.

![ExpressJS TypeScript REST API](docs/banner.jpeg)

## Description

This project provides a foundational structure for building REST APIs with Express.js and TypeScript. It follows a clear and organized architecture without the View layer, emphasizing the use of the RESTful API pattern.

## Features

- **Express.js and TypeScript**: Leverage the power of Express.js with TypeScript.
- **Clear API Design**: Organize your code with a focus on RESTful API principles.
- **Sequelize ORM Integration**: Seamlessly interact with databases using Sequelize.
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
4. Update Programming Language by ID
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
5. Delete Programming Language by ID
Request: DELETE http://localhost:3000/api/v1/programming-languages/1
   

## Usage
The project structure emphasizes REST API design principles. Customize controllers, models, and services according to your application's needs.

## Scripts
- npm start: Start the development server with automatic restart on file changes.
- npm run build: Compile TypeScript files to JavaScript.
- npm run lint: Run ESLint for code linting and auto-fixing.
- npm test: Placeholder for running tests.

## Contributing
Feel free to contribute to this project. Create issues, fork the repository, and submit pull requests to enhance or extend functionality.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE.md) for more information.
