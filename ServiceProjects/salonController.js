//Import the dependencies
const express = require('express');
const mongoose = require('mongoose');

//Create a router
var router = express.Router();

const Salon = mongoose.mondel('Salon')

//Router Controller for a Read request
router.get('/', (res, req) => {
	res.render("salon/salonEnrollUpdate")
});

//Router Controller for an Update request
router.post('/', (req, res) => {
	if(req.body._id == '')
		insertIntoMongoDB(req, res);
	else
		updateIntoMongoDB(req, res);
});

//Create a function to add data into MongoDB
function insertIntoMongoDB(req, res) {
	var salon = new Salon();
	salon.salonName = req.body.salonName;
	salon.salonAddress = req.body.salonAddress;
	salon.salonCity = req.body.salonCity;
	salon.salonState = req.body.salonState;
	salon.salonZipcode = req.body.salonZipcode;
	salon.salonNumber = req.body.salonNumber;
	salon.salonEmail = req.body.salonEmail;
	salon.salonWebsite = req.body.salonWebsite;
	salon.salonType = req.body.salonType;
	salon.salonHoursOfOp = req.body.salonHoursOfOp;
	salon.salonServices = req.body.salonServices;
	salon.save((err, doc) => {
		if(err)
			res.redirect('salon/list');
		else
			console,log('Error during record insertion : ' + err);
	});
}

//Create a function to update data MongoDB
function updateIntoMongoDB(req, res) {
	Salon.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
		if(!err) { 
			res.redirect('salon/list'); 
		}else {
			if(err.name == 'ValidationError') {
				handleValidationError(err, req.body);
				res.render("salon/salonEnrollUpdate")
			};
			else 
				console.log('Error during updating the record: ' + err);
		}
	});
}

//Router to update a salon using the name
router.get('/:salonName', (req, res) => {
	Salon.findByName(req.params.name, (err, doc) => {
		if(!err) {
			res.render("salon/salonEnrollUpdate");
		}
	});
});

//Router Controller for a Delete request
router.get('/delete/:salonName', (req, res) => {
	Salon.findByIdAndRemove(req.params.id, (err, doc) => {
		if (!err) {
			res.redirect('/salon/list');
		}else { 
			console.log('Failed to Delete Salon: ' + err); }
	});
});

module.exports = router;



