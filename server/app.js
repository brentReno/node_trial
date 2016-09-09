var express = require('express');
var app = express();
var path =require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false});
//custom module
 var testModule= require('../modules/testModule');
 var randomNumber = require('../modules/randomNumber');
var portDecision = process.env.PORT || 3000;
//spin up server
app.listen(portDecision, function(){
  console.log(' server is listening on port 3000');
});

//base url
app.get('/', function(req, res){
console.log('the base url has been hit');
//send back the html
res.sendFile(path.resolve( 'public/index.html'));
// call randoNummy from random numbers module
var stan = randomNumber(3, 81, true);
console.log("Stan's magic number:", stan);
});//end base url

// add  'public' as a static resource
app.use(express.static( 'public' ));

//post url for ajax call
//requires bodyParsers' url encoderparser
app.post('/texter', urlEncodedParser, function(req, res){
  console.log(' texter hit:', req.body);
  res.send(' The server has a '+ req.body.creature + ' that makes a ' +req.body.noise +"ing sound.");
  var fromOurModule = testModule();
  console.log(fromOurModule);
});
