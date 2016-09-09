//random Number module
var randoNummy= function(min, max, interger){
  //get random Number between min max
  var randyMarsh = Math.random()*(max - min)+min;
  if(interger){
    randyMarsh = Math.floor(randyMarsh);
  }
  return randyMarsh;
};
module.exports=randoNummy;
