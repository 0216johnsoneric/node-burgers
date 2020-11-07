# Node Burgers 

## Overview

The node burger app let's you create a burger logger with MySQL, Node, Express, Handlebars, and ORM. It implements the MVC design pattern and uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.
* Name the burger you want to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page.
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page. 

## Instructions

1) Clone lab: git clone git@github.com:0216johnsoneric/SQL-Employees-Tracker.git
2) Install node.js libraries with npm install
3) Run mysql -u root -p < schema.sql and mysql -u root -p < seed.sql to load database
3) Open server.js in intergrated terminal
4) Run node server.js
5) Eat DA Burgers!

or 

1) Deploy on Heroku

<img src="public/assets/img/Screen Shot 2020-11-07 at 4.13.24 PM.png"/>

### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.


