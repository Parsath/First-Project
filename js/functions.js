$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  
  $('.row1').css({
    'transform' : 'translate(0px, '+ wScroll /10.3 +'%)'
  });  

  $('.logo').css({
    'transform' : 'translate(0px, -'+ wScroll /6 +'%)'
  });

  if(wScroll > 100){

    $('.figures').addClass('is-dissapearing');

    $('.nav__links li').each(function(i){

      setTimeout(function(){
        $('.nav__links li').eq(i).addClass('is-unlanding');
      }, 150 * (i+1));

    });

    $('button').addClass('got-out');

  }

  if(wScroll < $('header').offset().top + 1){
    $('.figures').removeClass('is-dissapearing');

    $('.nav__links li').each(function(i){
      setTimeout(function(){
        $('.nav__links li').eq(i).removeClass('is-unlanding');
      }, 150 * (i+1));
    });

    $('button').removeClass('got-out');

  }

});


$(window).load(function(){

  $('button').addClass('is-showing');

  $('.figures').addClass('is-appearing');

  $('.nav__links li').each(function(i){
    setTimeout(function(){
      $('.nav__links li').eq(i).addClass('is-landing');
    }, 150 * (i+1));
  });

});
