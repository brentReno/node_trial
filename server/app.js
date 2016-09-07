var express = require('express');
var app = express();
var path =require('path');
//spin up server
app.listen('3000', 'localhost', function(){
  console.log(' server is listening on port 3000');
});

//base url
app.get('/', function(req, res){
console.log('the base url has been hit');
//send back the html
res.sendFile(path.resolve( 'public/index.html'));
});//end base url

// add  'public' as a static resource
app.use(express.static( 'public' ));

//post url for ajax call
app.post('/texter', function(req, res){
  console.log(' texter hit');
  res.send('generic texter response');
});
