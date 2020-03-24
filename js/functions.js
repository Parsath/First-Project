$(window).scroll(function(){
  
  var wScroll = $(this).scrollTop();
  
  $('.first-page').css({
    'transform' : 'translate(0px, '+ wScroll /25 +'%)'
  });  

  $('.logo').css({
    'transform' : 'translate(0px, -'+ wScroll /6 +'%)'
  });

  $('.intro').css({
    'transform' : 'translate(0px, -'+ wScroll  +'px)'
  });

  $('.recent-work').css({
    'transform' : 'translate(0px, -'+ (wScroll+420)  +'px)'
  });

  $('.workContent').css({
    'transform' : 'translate(0px, -'+ (wScroll+1320)  +'px)'
  });

  

  

  console.log(wScroll);

  if(wScroll > 100){

    $('.figures').addClass('is-dissapearing');

    $('.nav__links li').each(function(i){
      setTimeout(function(){
        $('.nav__links li').eq(i).addClass('is-unlanding');
      }, 150 * (i+1));

    });

    $('button').addClass('got-out');

    $('.row1').addClass('core');

    $('.topBtn').addClass('fade');
    
    $('.intro').addClass('appear');
    
    $('.highlight').addClass('fadein');
    
    $('.partnerPara').addClass('paraFade');

  }

  if(wScroll > 530){
    $('.skewingDiv').removeClass('workUnSkew');
    $('.skewingDiv').addClass('workSkew');
  }

  if(wScroll < 525){
    $('.skewingDiv').removeClass('workSkew');
    $('.skewingDiv').addClass('workUnSkew');
  }

  if(wScroll > 1260){
  
    $('.cool-hand').removeClass('cool-hand-out');
    $('.cool-hand').addClass('cool-hand-in');

    $('.logo-footer').removeClass('logo-footer-out');
    $('.logo-footer').addClass('logo-footer-in');
  }

  if(wScroll < 1260){
    
    $('.cool-hand').removeClass('cool-hand-in');
    $('.cool-hand').addClass('cool-hand-out');

    $('.logo-footer').removeClass('logo-footer-in');
    $('.logo-footer').addClass('logo-footer-out');
  }

  if(wScroll < $('header').offset().top + 1){

    $('.row1').removeClass('core');

    $('.figures').removeClass('is-dissapearing');

    $('.nav__links li').each(function(i){
      setTimeout(function(){
        $('.nav__links li').eq(i).removeClass('is-unlanding');
      }, 150 * (i+1));
    });

    $('button').removeClass('got-out');

    $('.topBtn').removeClass('fade');

    $('.intro').removeClass('appear');

  }

});


$(window).load(function(){
  
  $('.cool-hand').removeClass('cool-hand-in');
  $('.cool-hand').addClass('cool-hand-out');

  $('.logo-footer').removeClass('logo-footer-in');
  $('.logo-footer').addClass('logo-footer-out');
  
  $('.skewingDiv').removeClass('workSkew');
  $('.skewingDiv').addClass('workUnSkew');

  $('button').addClass('is-showing');

  $('.figures').addClass('is-appearing');

  $('.nav__links li').each(function(i){
    setTimeout(function(){
      $('.nav__links li').eq(i).addClass('is-landing');
    }, 150 * (i+1));
  });

});

// Get Modal Element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for click
modalBtn.addEventListener('click',openModal);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Listen for close click
closeBtn.addEventListener('click',closeModal);

// Function to open modal
function closeModal(){
  modal.style.display = 'none';
}

$(".topBtn").click(function(){
  $('html, body').animate({scrollTop: 0}, 800);
});

$(".box-arrow-link").hover(function(){
  $(this).removeClass('mouseOut');
  $(this).toggleClass('mouseIn');
  }, function(){
    $(this).removeClass('mouseIn');
    $(this).toggleClass('mouseOut');
});
