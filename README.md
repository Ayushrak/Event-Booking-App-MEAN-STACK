# Event Management Web Application

A Dynamic and responsive web application for Demo event management, designed to streamline the organization and handling of events.
 Leveraging the robust MEAN stack, it combines Angular for frontend development, 
Node.js and Express for backend services, and MongoDB for database management, all unified through the use of JavaScript and TypeScript.

## Key Features

- **Dynamic and Responsive UI**: Built with Angular, the application offers a seamless and interactive user experience across various devices and screen sizes.

- **RESTful API Services**: The backend, powered by Node.js and Express, provides secure and scalable RESTful APIs. It adheres to best practices in API development and ensures data integrity and security .

- **Secure Authentication**: Implements JWT (JSON Web Tokens) for authentication, safeguarding user data and sessions. 

- **Robust Database Management**: Utilizes MongoDB for storing and managing event data efficiently, enabling scalable growth and flexible data structuring.

- **Quality Assurance**: Emphasizes Backend reliability and performance through API testing utilizing the JavaScript Chai library.

## Technologies Used

- **Frontend**: Angular
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Languages**: JavaScript, TypeScript
- **Testing**: Chai

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed. Download from [nodejs.org](https://nodejs.org/).
- MongoDB installed and running. Instructions are available at [MongoDB. com](https://www.mongodb.com/try/download/community).
- Angular CLI installed. Install it globally via npm with `npm install -g @angular/cli`.

## Installing Project Dependencies

To install the project dependencies, follow these steps:

### Backend Dependencies

1. Navigate to the project's root directory in your terminal.
2. Run `npm install` to install Node.js dependencies listed in `package.json`.

### Frontend Dependencies

1. Navigate to the Angular application directory (`./frontend`) in your terminal.
2. Run `npm install` to install Angular and other frontend dependencies.

## Running the Application

To run the application, you need to start both the backend server and the frontend development server.

### Starting the Backend Server

1. In the root directory of the project(./backend), run `npm start`. This command will start the Node.js/Express server.
2. By default, the server will run on `http://localhost:3000` 

### Starting the Frontend Development Server

1. Navigate to the Angular application directory ./frontend/app.
2. Run `ng serve`. This will compile the Angular app and serve it,on `http://localhost:4200`.
3. Open a web browser and navigate to `http://localhost:4200` to view the application.




