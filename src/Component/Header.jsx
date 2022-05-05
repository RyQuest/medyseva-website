import React, { useEffect } from 'react'

function toggleNav($) {
    // Add Down Arrow Icon In Nav =================

    var subMenu = $('header .header .navs > ul > li > .sub-menu');
    $(subMenu).prev('a').addClass('down-arrow');


    // Add Class Ative On Header On Scrolling ==============================

    $(window).scroll(function () {
        if ($(window).scrollTop() > 140) {
            $('header').addClass('active');
        }
        else {
            $('header').removeClass('active');
        }
    });



    // Side-menu Area ==============================

    var MenuBtn = $('header .header .menu-btn-box');
    var sideMenu = $('.side-menu-area');
    var sideMenu_overlay = $('.side-menu-area .overlay');
    var sideMenu_close = $('.side-menu .header .close-btn');

    $(MenuBtn).click(function () {
        $(sideMenu).addClass('active');
        $('body').css({ 'overflow': 'hidden' });
    });

    $(sideMenu_overlay).click(function () {
        $(sideMenu).removeClass('active');
        $('body').css({ 'overflow': '' });
    });

    $(sideMenu_close).click(function () {
        $(sideMenu).removeClass('active');
        $('body').css({ 'overflow': '' });
    });


    // Side-menu Drop-Down ==============================

    var sideMenu_subMenu = $('.side-menu .navs > ul > li > .sub-menu');
    $(sideMenu_subMenu).prev('a').addClass('down-arrow');

    $('.side-menu .navs > ul > li > a').click(function () {
        $('.side-menu .navs > ul > li > a ~ .sub-menu').slideUp();
        $('.side-menu .navs > ul > li > a').removeClass('active');

        if ($(this).next('.sub-menu').is(':visible')) {
            $('.side-menu .navs > ul > li > a').removeClass('active');
            $(this).next('.sub-menu').slideUp();
        }
        else {
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

    $(requestBtn_1).click(function () {
        $(requestForm_popup).addClass('active');
        $('body').css({ 'overflow': 'hidden' });
    });

    $(requestBtn_2).click(function () {
        $(requestForm_popup).addClass('active');
        $('body').css({ 'overflow': 'hidden' });
    });

    $(requestForm_close).click(function () {
        $(requestForm_popup).removeClass('active');
        $('body').css({ 'overflow': '' });
    });

    $(requestForm_overlay).click(function () {
        $(requestForm_popup).removeClass('active');
        $('body').css({ 'overflow': '' });
    });

    $(requestBtn_2).click(function () {
        $(sideMenu).removeClass('active');
        $('body').css({ 'overflow': '' });
    });
}
const jquery = window.jQuery;
function Header() {
    useEffect(() => {
        toggleNav(jquery)
    }, [])
    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <a href=" ">
                                <img src="assets/img/logo/logo.png" alt="logo" className="logo-img-1" />
                            </a>
                        </div>
                        <div className="navs">
                            <ul>
                                <li>
                                    <a href=" ">About Us</a>
                                </li>
                                <li>
                                    <a href=" ">Services</a>
                                    <div className="sub-menu">
                                        <ul>
                                            <li>
                                                <a href=" ">Consultation</a>
                                            </li>
                                            <li>
                                                <a href=" ">Pathology</a>
                                            </li>
                                            <li>
                                                <a href=" ">Radiology</a>
                                            </li>
                                            <li>
                                                <a href=" ">Hospitalization</a>
                                            </li>
                                            <li>
                                                <a href=" ">Ambulance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href=" ">Join Us</a>
                                </li>
                                <li>
                                    <a href=" ">Blogs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="btns-box">
                            <div className="request-btn">
                                <button type="button" className="btn-1">Login</button>
                            </div>
                        </div>
                        <div className="menu-btn-box d-xl-none">
                            <button type="button" className="round-btn"><i className="fas fa-bars" /></button>
                        </div>
                    </div>
                </div>
            </header>
            {/* <div class="side-menu-area">
                <div class="side-menu-box">
                    <div class="side-menu">
                        <div class="header">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo-red.png" alt="logo"/>
                                </a>
                            </div>
                            <div class="close-btn">
                                <button type="button"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                        <div class="navs">
                            <ul>
                                <li>
                                    <a>About Us</a>
                                    <div class="sub-menu">
                                        <ul>
                                            <li>
                                                <a href="">one</a>
                                            </li>
                                            <li>
                                                <a href="">two</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a>Services</a>
                                    <div class="sub-menu">
                                        <ul>
                                            <li>
                                                <a href="">one</a>
                                            </li>
                                            <li>
                                                <a href="">two</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="">Join Us</a>
                                </li>
                                <li>
                                    <a href="">Blogs</a>
                                </li>
                            </ul>
                        </div>
                        <div class="request-btn">
                            <button type="button" class="btn-1">Login</button>
                        </div>
                    </div>
                </div>
                <div class="overlay"></div>
            </div> */}
        </>
    )
}

export default Header