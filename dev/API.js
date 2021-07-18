var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function(req, res) {

});

app.post('/transaction', function(req, res) {
    console.log(req.body);
    res.send('Hello World Sent');
});

app.get('/mine', function(req, res) {
    
});


app.listen(3000, function(){
    console.log('listening on port 3000');
});