
// Add Down Arrow Icon In Nav =================

var subMenu = $('header .header .navs > ul > li > .sub-menu');
$(subMenu).prev('a').addClass('down-arrow');


// Add Class Ative On Header On Scrolling ==============================

$(window).scroll(function(){
    if($(window).scrollTop() > 140){
        $('header').addClass('active');
    }
    else{
        $('header').removeClass('active');
    }
});



// Side-menu Area ==============================

var MenuBtn = $('header .header .menu-btn-box');
var sideMenu = $('.side-menu-area');
var sideMenu_overlay = $('.side-menu-area .overlay');
var sideMenu_close = $('.side-menu .header .close-btn');

$(MenuBtn).click(function(){
    $(sideMenu).addClass('active');
    $('body').css({'overflow' : 'hidden'});
});

$(sideMenu_overlay).click(function(){
    $(sideMenu).removeClass('active');
    $('body').css({'overflow' : ''});
});

$(sideMenu_close).click(function(){
    $(sideMenu).removeClass('active');
    $('body').css({'overflow' : ''});
});


// Side-menu Drop-Down ==============================

var sideMenu_subMenu = $('.side-menu .navs > ul > li > .sub-menu');
$(sideMenu_subMenu).prev('a').addClass('down-arrow');

$('.side-menu .navs > ul > li > a').click(function(){
    $('.side-menu .navs > ul > li > a ~ .sub-menu').slideUp();
    $('.side-menu .navs > ul > li > a').removeClass('active');
    
    if($(this).next('.sub-menu').is(':visible')){
        $('.side-menu .navs > ul > li > a').removeClass('active');
        $(this).next('.sub-menu').slideUp();
    }
    else{
        $(this).next('.sub-menu').slideDown();
        $(this).addClass('active');
    }
});


// Request-Form Popup ==============================
var requestBtn_1 = $('header .header .btns-box .request-btn button');
var requestBtn_2 = $('.side-menu .request-btn button');
var requestForm_popup = $('.request-form-popup');
var requestForm_close = $('.request-form .header .close-btn button');
var requestForm_overlay = $('.request-form-popup .overlay');

$(requestBtn_1).click(function(){
    $(requestForm_popup).addClass('active');
    $('body').css({'overflow' : 'hidden'});
});

$(requestBtn_2).click(function(){
    $(requestForm_popup).addClass('active');
    $('body').css({'overflow' : 'hidden'});
});

$(requestForm_close).click(function(){
    $(requestForm_popup).removeClass('active');
    $('body').css({'overflow' : ''});
});

$(requestForm_overlay).click(function(){
    $(requestForm_popup).removeClass('active');
    $('body').css({'overflow' : ''});
});

$(requestBtn_2).click(function(){
    $(sideMenu).removeClass('active');
    $('body').css({'overflow' : ''});
});





































