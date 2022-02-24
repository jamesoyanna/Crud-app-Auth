## CrudApp-with-Login-Auth-system Application

### About Project
This project is a fullstack CRUD application with login authentication and email verification built with React, Express, Nodejs, Mong0DB.

## Application Features
-Create an Account.
- Login system
- Create a task.
-Update a task
-Delete a task
-Complete a task
-Authentication with jsonwebtoken
- Email verification

## Application Functionalities
Login to the application with the below credentials.
OR Create an account with an email. If you are creating an account, you will to check your email to verify your acccount.


#### Live view of the application Demo can be found here- [Crud-App-Auth](https://crud-app-auth.netlify.app)

### Login Credentials: 
##### Username: admin@gmail.com, 
##### Password: admin123


### Pictorial View of the Application

Login Page.
![login](https://user-images.githubusercontent.com/26815113/155554852-693b31bf-82c0-4aa8-a06a-a89da24e6c12.PNG)



Dashboard View
![dashboard](https://user-images.githubusercontent.com/26815113/155554569-5bc11dc0-31e9-441a-a1f9-39b4c6752dfc.PNG)


## How to use the application

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

## Getting Started

#### Dependencies
##### Client Side

The project is built with;
* [React JS](https://beta.reactjs.org/) -Library for building user interfaces
* [Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js
* [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
* [React-router](https://reactrouter.com) - Enables the to implementation of dynamic routing in a web app.
* [React Boostrap](https://react-bootstrap.github.io) - Component-based library that provides native Bootstrap components as pure React components.
* [Redux-Thunk](https://www.npmjs.com/package/redux-thunk) -A middleware that lets you call action creators that return a function instead of an action object. 


##### Server Side
* [Express JS](https://expressjs.com/) - flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Bcrypt JS](https://www.npmjs.com/package/bcrypt) - This module enables storing of passwords as hashed passwords instead of plaintext.
* [Email Validator](https://www.npmjs.com/package/email-validator) - A simple module to validate an e-mail address
* [Mongoose](https://mongoosejs.com) - Provides a straight-forward, schema-based solution to model application data 
* [Morgan](https://www.npmjs.com/package/morgan) - A Node.js and Express middleware to log HTTP requests and errors.

* [Node.js](https://nodejs.org/en)- Cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

##### Database
* [Node.js](https://nodejs.org/en)- Source-available cross-platform document-oriented database program.

 
### Prerequisites
Ensure you have NodeJS installed by entering node -v on your terminal If you don't have NodeJS installed, go to the NodeJS Website, and follow the download instructions


### Tools Required
The following tools are required to run this application:

* A text editor like Visual Studio Code
* Command Line

### Getting the source code
You can clone the repository directly using this command:
git clone https://github.com/jamesoyanna/Crud-app-Auth.git
OR clicking on the code button ontop to clone the application.

### Installation
Installation steps:

Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js

![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
After clonning the application, to run the client application locally, you will have to install all the dependencies and packages. 
Open your terminal and navigate into the client folder using the command:
cd client

 Run yarn or npm install from the root of the client folder.

### Development server

#### Running the client App

  ``` 
Run yarn start or npm start from the root of the client folder to start the development server. 
Go to http://localhost:3000 on your browser. Your app should be running.
The app will automatically reload if you make changes to any of the source files.
  ```

#### Running the Server
- Open the project folder you cloned. 
- Create a .env file in the root folder
Fill in the following credentials:
PROD_MONGO_URI=
JWT_SECRET=
EMAIL_SECRET=
NODE_ENV=
PROD_CLIENT=
PORT=
EMAIL=
PASS=

Run npm install from your terminal.
Then run npm start. 
Your server should start running on  port 4000.

## Author

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


