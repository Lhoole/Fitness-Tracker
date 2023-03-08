# Fitness-Tracker

## Description 
This fitness tracker has been made with Node.js and Express.js, with a MySQL database and Sequelize ORM to take user input reagrding their fitness and display it as a log of their journey. Handlebars have been utilised in order to give the template of the webpage and display the data for the users to access easily. Users can log their exercise, sleep and nutritional information each day and the webpage will store each users data and display it to them while they are logged in. After inputting the data, users are then able to visualise their progress with their data displayed in charts implemented with the chart.js npm package, otherwise, users have the option to delete thier previous entries at any time. 

---
## Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Demo](#demo)

---
## Installation
THis project can be accessed with the 
1. clone github repository onto local environment

---
## Usage
Within the command line, the user must input "node index.js" in order to initiate the README generator, after which the user will be given each subheading of their new read me file where they can input the relevant information for their new repository. 
After this is done a new file will be created within the folder with the new readme including all information input. 

---
## Contributing
Michael Bosse

---
## License
No License

---
## Questions
Github - https://github.com/Mbosse97 

---
### Demo

Screenshot of Project Demo

![Screemshot of project demo](./Develop/Images/Project%20Demo.PNG)

Project Demo Link: https://drive.google.com/file/d/13XY1HKjqyRHcooNAT_gTNkRhlXh-JMzz/view 

## ideas 
fitness tracker landing page server.js

polished ui 
login/sign up (withAuth) 

dashboard landing page
user directed to user landing page

handlebars/subpages/ get requests, post requests / delete request / put request 

user has many sleeps/meals/excersies

orm 
user => id/ first name, last name, password(bycrypt), email. 

belongs to => user
sleep tacker => foreign key user id
date
add sleep time 

belongs to => user
meals sql => id foreign key user id
add meals => meal name
date 

belongs to => user
exercise sql => id foreign key user id
add date 
time spent exercising
what exercise

![Basic ERD.](/Screenshot.png)

<img width="1080" src="/basic flowchart for fitness app.jpg">

ideas for 2.0
how many caloires spent
time elpased
heartrate monitor requires hardware
calorie counter
sleep quality
connect to smart devices
libraries


npm packages
sequelise
express
npm i 
mysql2
dotenv
lint
chart.js

