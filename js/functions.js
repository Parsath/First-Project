$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  
  $('.row1').css({
    'transform' : 'translate(0px, '+ wScroll /10.3 +'%)'
  });  
  

  $('.logo').css({
    'transform' : 'translate(0px, -'+ wScroll /6 +'%)'
  });

  if(wScroll > 200){
    console.log("hi");
    $('.figures').addClass('is-dissapearing');
  }

  if(wScroll < $('header').offset().top + 1){
    console.log("hi");
    $('.figures').removeClass('is-dissapearing');
  }

});
