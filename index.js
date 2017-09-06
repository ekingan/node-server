require('./services/passport')
const express = require('express'),
	app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5001
app.listen(PORT)
