import { Tamagotchi } from './../js/tamagotchi.js';


$(document).ready(function(){
  $('#tamagotchi-form').submit(function(){
    event.preventDefault();
    $('.row').show();
    $('.image-live').show();
    let newTama = new Tamagotchi($('#name').val());
    $('#feed').click(function(){
      if(!newTama.death) {
        newTama.feed();
      } else {
        $('#ded-message').text(`${newTama.name} can't eat right now.`);
      }
    });
    $('#play').click(function(){
      if(!newTama.death) {
        newTama.play();
      } else {
        $('#ded-message').text(`${newTama.name} doesn't respond.`);
      }
    });
    $('#sleep').click(function(){
      if(!newTama.death) {
        newTama.sleep();
      } else {
        $('#ded-message').text(`${newTama.name} is already in eternal slumber.`);
      }
    });
    newTama.setHunger();
    newTama.setLonely();
    newTama.setTired();
    let interval = setInterval(function(){
      $('#food').text(newTama.foodLevel);
      $('#attention').text(newTama.attentionLevel);
      $('#rest').text(newTama.restLevel);
      if(newTama.isDead()){
        clearInterval(interval);
        $('.image-dead').show();
        $('.image-live').hide()
        $('#ded').text(`${newTama.name} has died.`);
      }
    }, 100);



  });
  // $('#time').text(moment().format());
  //
  // $('#food').text(moment().format());
  // $('#attention').text(moment().format());
  // $('#rest').text(moment().format());

});
