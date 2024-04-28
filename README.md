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

This project is a social network API built with NoSQL database technology, specifically MongoDB. The API allows users to share their thoughts, react to friends' thoughts, and manage friend lists. It leverages Express.js for routing and Mongoose ODM for interacting with the MongoDB database.

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

1. Clone  the repo from GitHub by running:
    -git clone git@github.com:OrganicClick/noSQL-social-network-api-challenge.git

2. Navigate into the project directory by running:
    -cd noSQL-social-network-api-challenge

3. Create a .env file and add your MYSQL_USER, MYSQL_PASSWORD, and DB_NAME on a new line.

4. Please consult the following documentation for installing MongoDB
    -https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb

5. Run `npm install` to install all dependencies.


## Usage


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

[Link to Video Walkthrough] 


## Technologies Used
MongoDB

Mongoose ODM

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
 - Initial Models and API Routes to use were provided by GWU Coding Boot Camp
 - Documentation for installation of MongoDB (https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)
 - Documentation for use of virtuals in Mongoose (https://mongoosejs.com/docs/tutorials/virtuals.html)
 - Documentation for use of schemas in Mongoose (https://mongoosejs.com/docs/guide.html)
 - Referenced my own Github Gist for use of regex in application (https://gist.github.com/OrganicClick/28d61520a28a6f26997e042445f4dd77)
 - Referenced for using index.js files in node.js applications (https://stackoverflow.com/questions/21063587/what-is-index-js-used-for-in-node-js-projects)
 - Documentation for use of Express routing (https://expressjs.com/en/guide/routing.html)
 - Referenced for use of CRUD operations using Mongoose and MongoDB (https://www.geeksforgeeks.org/node-js-crud-operations-using-mongoose-and-mongodb-atlas/)
- Documentation referenced for use of controller and models in Mongoose (https://restful-api-node-typescript.books.dalenguyen.me/en/latest/using-controller-and-model.html)
- Referenced for seeding a MongoDB database (https://www.mongodb.com/developer/products/mongodb/seed-database-with-fake-data/)
- Referenced for establishing connection to MongoDB with Javascript (https://mongoosejs.com/docs/connections.html)
- Utilized to generate necessary syntax to check if a user already exists in a database in the userController file (https://chat.openai.com/)

## Contact
To contact the owner of this repo, OrganicClick, please reach out via OrganicClick@exampleemail.com