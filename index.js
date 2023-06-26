// create a new express server
const express = require('express');
const app = express();
const port = 3000;

// use the express-static middleware
app.use(express.static('public'));

// define the first route
app.get('/', function (req, res) {
    res.send('Hello from Express!');    

});

// q:how do i start this server?
// a: use the listen method
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
.git