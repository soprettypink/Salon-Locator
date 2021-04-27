var router = express.Router();

const User = mongoose.mondel('User')

//Router Controller for a Read request
router.get('/', (res, req) => {
	res.render("user/userRegisterUpdate")
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
	var user = new User();
	user.usernName = req.body.userName;
	user.userAddress = req.body.userAddress;
	user.userCity = req.body.userCity;
	user.userState = req.body.userState;
	user.userZipcode = req.body.userZipcode;
	user.userEmail = req.body.userEmail;
	user.userType = req.body.userType;
	user.save((err, doc) => {
		if(err)
			res.redirect('user/list');
		else
			console,log('Error during record insertion : ' + err);
	});
}

//Create a function to update data MongoDB
function updateIntoMongoDB(req, res) {
	Salon.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
		if(!err) { 
			res.redirect('user/list'); 
		}else {
			if(err.name == 'ValidationError') {
				handleValidationError(err, req.body);
				res.render("user/userRegisterUpdate")
			};
			else 
				console.log('Error during updating the record: ' + err);
		}
	});
}

//Router to update a salon using the name
router.get('/:userName', (req, res) => {
	User.findByName(req.params.name, (err, doc) => {
		if(!err) {
			res.render("user/userRegisterUpdate");
		}
	});
});

//Router Controller for a Delete request
router.get('/delete/:userName', (req, res) => {
	User.findByIdAndRemove(req.params.id, (err, doc) => {
		if (!err) {
			res.redirect('/user/list');
		}else { 
			console.log('Failed to Delete Account: ' + err); }
	});
});

module.exports = router;



