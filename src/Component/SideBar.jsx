import React from 'react'


function SideBar() {
  
    return (
        <>
            <div className="side-menu-area">
                <div className="side-menu-box">
                    <div className="side-menu">
                        <div className="header">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo-red.png" alt="logo" />
                                </a>
                            </div>
                            <div className="close-btn">
                                <button type="button"><i className="fas fa-times" /></button>
                            </div>
                        </div>
                        <div className="navs">
                            <ul>
                                <li>
                                    <a href="#about" >About Us</a>
                                    {/* <div className="sub-menu">
                                        <ul>
                                            <li>
                                                <a href>one</a>
                                            </li>
                                            <li>
                                                <a href>two</a>
                                            </li>
                                        </ul>
                                    </div> */}
                                </li>
                                <li>
                                    <a>Services</a>
                                    <div className="sub-menu">
                                        <ul>
                                            <li>
                                                <a href="#services">Consultation</a>
                                            </li>
                                            <li>
                                                <a href="#services ">Pathology</a>
                                            </li>
                                            <li>
                                                <a href=" #services">Radiology</a>
                                            </li>
                                            <li>
                                                <a href=" #services">Hospitalization</a>
                                            </li>
                                            <li>
                                                <a href=" #services">Ambulance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#team">Team</a>
                                </li>
                                <li>
                                    <a href="#gallery">Gallery</a>
                                </li>
                                <li>
                                    <a href="#contact-info">Contact Us</a>
                                </li>
                                {/* <li>
                                    <a href>Join Us</a>
                                </li>
                                <li>
                                    <a href>Blogs</a>
                                </li> */}
                            </ul>
                        </div>
                        {/* <div className="request-btn">
                            <button type="button"  href="https://clinic.medyseva.com/login" target={"_blank"} className="btn-1">Login</button>
                        </div> */}
                         <div className="btns-box">
                            <div className="request-btn">
                                <a   href="https://clinic.medyseva.com/login" target={"_blank"} className="btn-1">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay" />
            </div>
        </>
    )
}

export default SideBar