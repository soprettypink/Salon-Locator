const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const app = express();
app.use(express.static("public"));

//View engine setup
app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');

//GET Endpoint
app.get("/", (req, res) => {
	fetch('mongodb+srv://SoPrettyPink:pINKY@sobicluster.thoc8.mongodb.net/salon-locator?retryWrites=true&w=majority')
		.then(res => res.json())
		.then(users => {
			res.render('index', {users: users});
	});
});

let data = getSomeDataYouWantToSend()
fetch('/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: data
})

let express = require('express')
let app = express()

app.use(express.static(`${__dirname}/main`))
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
    res.render('salons.html')
})

app.post('/send', (req, res) => {
    console.log(req.body) // <- here is your data sent from client frontend
})

app.listen(3000)