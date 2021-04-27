require('./mongodb');

//add the necessary packages
const express = require('express');
var app = express();
const path = require('path');
const exphb = require('express-handlebars');
const bodyparser = require('body-parser');
 
const courseController = require('./controllers/courseController');
 
app.use(bodyparser.urlencoded({
extended: true
}));
 
//configuring Express middleware for the handlebars
app.set('views', path.join(__dirname, '/views/'));
//app.engine('hbs', exphb({ extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + 'views/layouts/' }));
//app.set('view engine', 'hbs');

//establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//set the controller path which will respond to the user actions
app.use('/salon', salonController);
app.use('/user', userController);