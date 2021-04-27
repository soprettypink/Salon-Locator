//File Uploads
const salonlogo = require('multiparty')

app.post('/salonlogo/:year/:month', (req, res) => {
	const form = new multiparty.Form()
	form.parse(req, lerr, field, files) => {
		if(err) return res.status(500).send({ error: err.message })
			handlers.salonLogoProcess(req, res, fields, files)
	}
})
//Rroute handler
exports.salonLogoProcess = (req, res, fields, files) => {
	console.log('field data: ', fields)
	console.log('files: ', files)
	res.redirect(303, '/salonlogo-thank-you')
}

//file Uploads using Fetch
document.getElementById('salonLogoForm')
	.addEventListener('submit', evt => {
		evt.preventDefault()
		const body = new FormData(evt.target)
		const container = 
			document.getElementById('salonLogoFormContainer')
		const url = 'api/salonlogo/{{year}}/{{month}}'
		fetch(url, { method: 'post', body })
			.then(resp => {
				if(resp.status < 200 || resp.status >= 300)
					throw new Error('Requiest failed with status ${resp.status}')
				return resp.json()
			})
			.then(json => {
				container.innerHTML = '<b>Thank you for submitting your logo!</b>'
			})
			.catch(err => {
				container.innerHTML = '<b>We are sorry, there seems to be a problem processing ' + 
					'your submission. Please <a href="/newsletter"> try again</a>'
			})
	})
