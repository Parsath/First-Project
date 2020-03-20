// functions js



/////////////// INTRO & SELECTORS ///////////////



//$('h1').hide();
//$('h1#heading1').hide();

//$('ul#list li:first').css('color','red');
//$('ul#list li:last').css('color','green');
//$('ul#list li:even').css('background-color','yellow');
//$('ul#list li:nth-child(3n)').css('list-style','none');
//$('[href]').css('color','green');
//$('a[href="http://yahoo.com"]').css('color','red');



/////////////// EVENTS ///////////////



/*
$('#btn1').click(function(){
    alert('Button Clicked!');
});

$('#btn1').on('click',function(){
    alert('Button Clicked!');
});

$('#btn1').on('click',function(){
    //$('.para1').hide();
    $('.para1').toggle();
});

$('#btn2').on('click',function(){
    $('.para1').show();
});

$('#btn1').dblclick(function(){
    $('.para1').toggle();
});

$('#btn1').hover(function(){
    $('.para1').toggle();
});

$('#btn1').on('mouseenter',function(){
    $('.para1').toggle();
});

$('#btn1').on('mouseleave',function(){
    $('.para1').toggle();
});

$('#btn1').on('mousemove',function(){
    $('.para1').toggle();
});

$('#btn1').on('mousedown',function(){
    $('.para1').toggle();
});

$('#btn1').on('mouseup',function(){
    $('.para1').toggle();
});

$('#btn1').click(function(e){
    //alert(e.currentTarget.id);
    //alert(e.currentTarget.innerHTML);
    //alert(e.currentTarget.outerHTML);
    //alert(e.currentTarget.className);
});

$('#btn1').on('mousemove',function(e){
    console.log('Coords: Y: '+e.clientY+"X: "+e.clientX);
});

$(document).on('mousemove',function(e){
    console.log('Coords: Y: '+e.clientY+"X: "+e.clientX);
});

$(document).on('mousemove',function(e){
    $('#coords').html('Coords: Y: '+e.clientY+"X: "+e.clientX);
});

$('input').focus(function(){
    //alert('Focus');
    $(this).css('background','pink');
});

$('input').blur(function(){
    //alert('Focus');
    $(this).css('background','#f4f4f4');
});

$('input').keyup(function(e){
    console.log(e.target.value);
});

$('select#gender').change(function(e){
    alert(e.target.value);
})

$('#form').submit(function(e){
    e.preventDefault();
    var name = $('input#name').val();
    console.log(name);
})
*/



/////////////// DOM MANIPULATION ///////////////



//$('p.para1').css({color: 'red',background: 'grey'});
//$('p.para2').addClass('myClass');
//$('p.para2').removeClass('myClass');
/*
$('#btn1').click(function(){
    $('p.para2').toggleClass('myClass');
});
*/

//$('#myDiv').text('Hello World');
//$('#myDiv').html('<h3>Hello World</h3>');
//alert($('#myDiv').text());
//$('ul').append('<li>Append List Item</li>');
//$('ul').prepend('<li>Prepend List Item</li>');
//$('.para1').appendTo('.para2');
//$('.para1').prependTo('.para2');
//$('ul').before('<h4>Hello</h4>');
//$('ul').after('<h4>After</h4>');
//$('ul').empty();
//$('ul').detach();
//$('a').attr('target','_blank');
//alert($('a').attr('href'));
//$('a').removeAttr('target');
//$('p').wrap('<h1>');
//$('p').wrapAll('<h1>');

/*
$('#newItem').keyup(function(e){
    var code = e.which;
    if(code == 13){
        e.preventDefault();
        $('ul').append('<li>'+e.target.value+'</li>');
    }
});
var myArr = ['Brad','Kelley','Nate','Jose'];
$.each(myArr , function(i, val){
    //console.log(val);
    $('#users').append('<li>'+val+'</li>')
});

var newArr = $('ul#list li').toArray();
//console.log(newArr);
$.each(newArr , function(i, val){
    console.log(val.innerHTML);
})
*/



/////////////// EFFECT & ANIMATION ///////////////



$('#btnFadeOut').click(function(){
    $('#box').fadeOut(3000,function(){
        $('#btnFadeOut').text("It's Gone");
    });
});

$('#btnFadeIn').click(function(){
    $('#box').fadeIn(3000,function(){
        $('#btnFadeIn').text("It's Back");
    });
});

$('#btnFadeTog').click(function(){
    $('#box').fadeToggle(1000);
});

$('#btnSlideDown').click(function(){
    $('#box').slideDown(3000);
});

$('#btnSlideUp').click(function(){
    $('#box').slideUp(3000);
});

$('#btnSlideTog').click(function(){
    $('#box').slideToggle(1000);
});

$('#btnStop').click(function(){
    $('#box').stop();
});

$('#moveLeft').click(function(){
    $('#box2').animate({
        left: 0,
        height: '100px',
        width: '100px',
        opacity: 1
    });
});

$('#moveRight').click(function(){
    $('#box2').animate({
        left: 500,
        height: '300px',
        width: '300px',
        opacity: '0.5'
    });
});

$('#moveAround').click(function(){
    var box = $('#box2');
    box.animate({
        left: 300
    });
    box.animate({
        top: 300
    });
    box.animate({
        left: 0,
        top: 300
    });
    box.animate({
        left: 0,
        top: 0
    });
});



/////////////// AJAX ///////////////



// https://www.youtube.com/watch?v=eR3rcalj06Q