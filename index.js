require('./models/User')
require('./services/passport')
const express = require('express'),
	mongoose = require('mongoose'),
	keys = require('./config/keys'),
	cookieSession = require('cookie-session'),
	passport = require('passport'),
	app = express()

mongoose.connect(keys.mongoURI)

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5001
app.listen(PORT)
