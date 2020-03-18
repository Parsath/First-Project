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
*/

$('select#gender').change(function(e){
    alert(e.target.value);
})

$('#form').submit(function(e){
    e.preventDefault();
    var name = $('input#name').val();
    console.log(name);
})


