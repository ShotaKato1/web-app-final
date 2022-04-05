Scheduling Meeting: Final Project 

1) The host login to the webpage with host email and password
2) In the webpage host adds the user by user email 
3) By webpage hosts send a link to the users of the organization email to select the time they can't have a meeting 
4) User recieves the mail and they get to click the link which will open to the table of time selection 
5) Then the user select the time
6) By the help of the deduction funtion we get to deduct and simplify what times are available for the everyone
7) The webpage displays and highlights the slots that are open for everyone to have a meeting 

## Step 1: Database
There are two databases in this project, the user database and the host database

### The `User` table
   username text unique - not null
   email text unique - not null
   organization unique - not null 
   
### The `Host` table
  hostid text Primary key
  hostName text unique - not null
  hash text unique - not null 
  organization text unique - not null
  email text unique - not null

### The `Time` table
  time boolean default 1 
 
The tables are in schema.sql. 

## Step 2: Models 
In Models/ called UserModel.js, this fie contains the code for managing user accounts in the database. hostmodel.js file contains the code for managaing the host account in the database. 

## Step 3: Controllers 
In Controllers/ called hostController.js and userController.js. These files will implement the route handlers for managing the user and host resource.

## Step 4: Validators 

In Validators/ called hostValidation.js and userValidation.js. Implement a validation middleware that will validate a guess in the request body.

## Step 5: Session Management 


├── Controllers
│   ├── hostController.js
│   └── userController.js
├── Database
│   ├── db.js
│   ├── schema.sql
│   └── wordle.db
├── Models
│   ├── db.js
│   ├── hostModel.js
│   └── userModel.js
├── Validators
│   ├── hostValidation.js
│   └── userValidation.js
├── public
│   ├── login.html
│   └── userRegister.html
│   └── hostRegister.html
│   └── timeAvailable.html
├── app.js
├── package-lock.json
├── package.json
└── server.js








