$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  console.log(wScroll);
  
  
  $('.row1').css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'
  });

  $('.logo').css({
    'transform' : 'translate(0px, -'+ wScroll /4 +'%)'
  });
  

});
