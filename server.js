const express = require('express')
const app = express()

const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')

//const mainRoutes = require('./routes/main') may need to add something like this

//const homeRoutes = require('./routes/home')
const mainRoutes = require('./routes/main')
const allianceRoutes = require('./routes/alliance')
const hordeRoutes = require('./routes/horde')
const connectDB = require('./config/database')

// Passport config
require('./config/passport')(passport)

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 
app.use(logger('dev')) // new

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/alliance', allianceRoutes)
app.use('/horde', hordeRoutes)


app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})