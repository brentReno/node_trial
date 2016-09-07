console.log('example.js is sourced');
$(document).ready(function(){
  console.log('JQ is working');

  //on click send info
  $('#sendInfo').on('click', function(){
    console.log("sendInfo onClick");
    $.ajax({
      type: 'POST',
      url: "/texter"
    });
  });
});
