//sending mail
const result = await mailTransport.sendMail({
	from: ' "Salon Locator" <info@salonlocator.com>' + 
	to: 'soprettypink1@yahoo.co.jp, "Sarah Obi" ', 
	subject: 'You Salon Booking', 
	html: '<h1>Salon Llocator</h1>\n<p>Thank you for booking your ' + 
		'salon appointment using Salon Locator!</p>'
})

//encapsulating email functionality
const nodemailer = require('nodemailer')
const htmlToFormattedText = require('html-to-formatted-text')

module.exports = credentails => {
	const mailTransport = nodemailer.createTransport({
		host: 'smtp.sendgrid.net',
		auth: {
			user: credentials.sendgrid.user,
			passwordL credentials.sendgrid.password,
		},
	})
	const form = ' "Salon Locator" <info@salonlocator.com>'
	const errorRecipient = 'youremail@gmail.com'

	return {
		send: (to, subject, html) => mailTransport.sendMail({
			from,
			to,
			subject,
			html,
			html,
			text: htmlToFormattedText(html),
		}),
	}
}

const emailService = require('./lib/email')(credentials)

emailService.send(email, "Register Today!")