import React from 'react'

function Header() {

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