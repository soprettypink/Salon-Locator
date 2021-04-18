//User login route
const { body, validtionResult } = require('express-validator');

app.post('/login', validate([
        body('email').isEmail().normalizeEmail(),
        body('password').isLength({
            min: 5
        })
    ]),
    (req, res) => {
        // Processing the data
        res.status(200).json({
            success: true,
            message: 'Login successful',
        })
    });

app.post('/register', validate(checkSchema(registrationSchema)), (req, res) => {
    // Processing the data
    res.status(200).json({
        success: true,
        message: 'Registration successful',
    });
});