const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

let app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Function to handle the root path
app.post('/', async function(req, res) {
  console.log(req.body)
  res.json({ body: req.body } )
});



let server = app.listen(8080, function() {
    console.log('Server is listening on port 8080')
});
