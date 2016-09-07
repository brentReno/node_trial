Node Express Setup in Class
=====================
step by step instructions
---------------------------------------------------
* create project folder
* npm init this folder
* fill out projet details (as much as we need)
* should now have a package.json

installing depedencies
-------------------------------------------------------

* npm install express --save in terminal
* package.json should have dependencies

create server folder
----------------------------------------------
* create server folder
* create app.js
* require express and create an express app variable
* app.listen command
* spin up server with app.listen
* start server ('node server/app.js')
* console log in the terminal

create a route for the server
---------------------------------------------------------------
* add a base route "app.get"
* refresh server
* Visit "Localhost:3000" in browser

set up to serve html file
-----------------------------------------------------
* require path module
* create public folder in project root
* create index.html in public folder
* update app.get to send this in response from a resolved path
