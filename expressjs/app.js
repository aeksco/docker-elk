const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = 4000;

// // // //

// Express.js App & Configuration
const app = express()

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// print the request log on console
app.use(morgan('dev'))

// index page, just for testing
// TODO - REMOVE
app.get('/', (req, res) => {
  res.send('Hello from Node Express!')
})

// // // //

app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
});

// // // //

// Exports Express app
module.exports = app;
