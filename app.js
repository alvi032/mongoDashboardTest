var express = require('express')
const expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose')

const app = express()

// db congfig
const db = require('./config/keys').MongoURI

// connect to mongodb
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( ()=> console.log('MongoDB Connected'))
    .catch(err=> console.log(err))

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// bodyparser
app.use(express.urlencoded({ extended: false}))


app.use('/', require('./routes/index'))


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))