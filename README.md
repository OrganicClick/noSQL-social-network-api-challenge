# noSQL-social-network-API-challenge

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Link to Video Walkthrough](#link-to-video-walkthrough)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [Contact](#contact)

## Description

This project involves building the back end for an e-commerce site using Express.js API and Sequelize to interact with a MySQL database. The application is designed to simulate the functionality of an e-commerce platform by implementing models for products, categories, tags, and product tags.

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Installation

1. Clone  the repo from GitHub by running:
    -git clone git@github.com:OrganicClick/e-commerce-back-end-challenge.git

2. Navigate into the project directory by running:
    -cd e-commerce-backend-challenge

3. Create a .env file and add your MYSQL_USER, MYSQL_PASSWORD, and DB_NAME on a new line.

4. Run `npm install` to install all dependencies.


## Usage

1. First, access mySQL and  run the following code to create the database and tables:
    - CREATE  DATABASE ecommerce_db;
    - USE ecommerce_db;
    - SOURCE db/schema.sql;

2. Exit mySQL to re-enter the CLI

3. To seed the database, run `npm run seed`. This will populate your database with test data.

4. To start the  server, run `npm start`. The server should now be listening at http://localhost:3001

5. Open the Insomnia application and enter http://localhost:3001 as the base URL

6. You should now be free to make GET, POST, PUT, and DELETE requests to the specified endpoints as outlined in the source code.

** NOTE: There are still some problems with getting the 'npm run seed' script to work. To fix this, you may have to restart the server or directly run "node seeds/index.js" in the CLI to get around this error. 

## Contributing
If you have suggestions or contributions to add, please follow the guidelines listed below. Pull requests will be reviewed in the order that they are received.
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push to the branch.
- Create a new Pull Request.

## License
This challenge is provided under the MIT License. See the [LICENSE](LICENSE) file for details.


## Link to Video Walkthrough

Please click the following link to view a video walkthrough of how to use the application:

[Link to Video Walkthrough] (https://drive.google.com/file/d/1SdgZek0ZW3dsgrc3xSwEYPMXRhlle-Eu/view)


## Technologies Used
Node.js

Sequelize package

MySQL

MySQL2 Package

Dotenv package

JavaScript

Git/GitHub

Insomnia

Express.js

## Credits
Development was assisted by the following resources:
 - Xpert Learning Assistant provided by the GWU Coding Boot Camp. Provided general guidance and assistance with Installation
   instructions and Usage instructions
 - Initial file architecture referenced is one of my previous assignments (https://github.com/OrganicClick/e-commerce-back-end-challenge)
 - Project guidelines, initial screenshots, reference mock-up, and accepted terms of submission provided by GWU Coding Boot Camp
 - Xpert Learning Assistant consulted for initial summarization and description of assignment 

## Contact
To contact the owner of this repo, OrganicClick, please reach out via OrganicClick@exampleemail.com