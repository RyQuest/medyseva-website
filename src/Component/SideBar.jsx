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
                                  <a href>About Us</a>
                                  <div className="sub-menu">
                                      <ul>
                                          <li>
                                              <a href>one</a>
                                          </li>
                                          <li>
                                              <a href>two</a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                              <li>
                                  <a href>Services</a>
                                  <div className="sub-menu">
                                      <ul>
                                          <li>
                                              <a href>one</a>
                                          </li>
                                          <li>
                                              <a href>two</a>
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
                      <div className="request-btn">
                          <button type="button" className="btn-1">Login</button>
                      </div>
                  </div>
              </div>
              <div className="overlay" />
          </div>
      </>
  )
}

export default SideBar