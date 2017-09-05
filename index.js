const express = require('express'),
	app = express()

app.get('/', (req, res) => {
	res.send({ hi: 'there' })
})

cont PORT = process.env.PORT || 5001
app.listen(PORT)
