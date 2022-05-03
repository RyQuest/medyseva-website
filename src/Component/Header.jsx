import React from 'react'

function Header() {
  return (
      <>
          <div className="container">
              <div className="header">
                  <div className="logo">
                      <a href="index.html">
                          <img src="assets/img/logo/logo.png" alt="logo" className="logo-img-1" />
                          <img src="assets/img/logo/logo-red.png" alt="logo" className="logo-img-2" />
                      </a>
                  </div>
                  <div className="navs">
                      <ul>
                          <li>
                              <a href>About Us</a>
                          </li>
                          <li>
                              <a href>Services</a>
                              <div className="sub-menu">
                                  <ul>
                                      <li>
                                          <a href>Consultation</a>
                                      </li>
                                      <li>
                                          <a href>Pathology</a>
                                      </li>
                                      <li>
                                          <a href>Radiology</a>
                                      </li>
                                      <li>
                                          <a href>Hospitalization</a>
                                      </li>
                                      <li>
                                          <a href>Ambulance</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <a href>Join Us</a>
                          </li>
                          <li>
                              <a href>Blogs</a>
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
      </>
  )
}

export default Header