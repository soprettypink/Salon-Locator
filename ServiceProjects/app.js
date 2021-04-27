var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://SoPrettyPink:pINKY@sobicluster.thoc8.mongodb.net/salon-locator?retryWrites=true&w=majority';
var str = " ";

app.route('/Salon').get(function(req,res)
{
	MongoClient.connect(url, function(err, db) {
		var cursor = db.collection(users).find(salon);
		cursor.each(function(err, item) {
			if(item != null) {
				str = str + "    Salon    " + item.Salon + "<br>";
			}
		});
		res.send(str);
		db.close();
	});
});

var server = app.listen(3000, function() {});

const mongoose = require('mongoose');

//attributes of the User object
var userSchema = new mnongoose.Schema({
	name: {
		type: String,
		required: 'This field is required!'
	},
	username: {
		type: String
	}
	address: {
		type: String
	}
	city: {
		type: String
	}
	state_or_prefecture: {
		type: String
	}
	email: {
		type: String,
		required: 'This field is required!'
	}
	password: {
		type: String,
		required: 'This field is required!'
	}
	account_type: {
		type: String,
		required: 'This field is required!'
	}
});

mongoose.model('User', userSchema);