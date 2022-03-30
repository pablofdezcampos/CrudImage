# crudImage
# Description
- API CRUD to load images to the server.

# Technologies 
- MySQL -> to load the tables that contains the data.
- Multer -> Middleware for Express and Node to manipulate the data when the user load files.
- Express -> framework of JavaScript in wich is done the implementation of the CRUD (Create Read Update and Delete) since HTTP Methods.
- Cors -> to access to resources in a different domain.
- Node.js -> code in server.

# Specifications
- I use MVC (Model Vist Controller).
- I use js for the backend.
- There is not front-end

# Install
- You have to have Node.js and MySQL like enviroments variables.
- To do the project from start:
    - npm init --yes
    - npm install mysql multer express cors
- If you want to prove the backend:
    - npm i, to get the dependencies.
- You have to create a table in your SQL Server.
- You have to have a user in SQL with all the privileges.
- You have to change the mysql_data.json to the preferences of your system and SQL.

# Table Creation

![image](https://user-images.githubusercontent.com/57486874/160827096-89f7382f-935b-4bb4-a75b-78db71cd3bee.png)

# Test
- You can test the backend in PostMan for example.
- Pass the route to PostMan and set a get for the route.
- Run the project with npm start.
