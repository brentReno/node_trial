console.log('example.js is sourced');
$(document).ready(function(){
  console.log('JQ is working');

  //on click send info
  $('#sendInfo').on('click', function(){
    console.log("sendInfo onClick");
    //get user input
    var creatureIn = $('#creatureIn').val();
    var noiseIn = $('#noiseIn').val();
    //assemble object to send
    var objectToSend= {
      creature: creatureIn,
      noise: noiseIn,
    };
    // ajax post that sends object to /texter
    $.ajax({
      type: 'POST',
      url: "/texter",
      data: objectToSend,
      success: function(data){
        console.log('got this from the server-' + data);
        var divText =data;
        $('<div id="serverData">'+divText +'</div>').hide().appendTo('body').fadeIn();
      }
    });
  });

});
