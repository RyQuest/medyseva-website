import React from 'react'

function Footer() {
  return (
      <>
          <footer id="footer">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3">
                          <div className="foter-img">
                              <img src="assets/img/logo/logo.png" alt="..."/>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="footer-links">
                              <ul>
                                  <li>
                                      <a href>About Us</a>
                                  </li>
                                  <li>
                                      <a href>Services</a>
                                  </li>
                                  <li>
                                      <a href>Testimonials</a>
                                  </li>
                                  <li>
                                      <a href>Blogs</a>
                                  </li>
                                  <li>
                                      <a href>Join Us</a>
                                  </li>
                                  <li>
                                      <a href>Contact US</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="info-links">
                              <ul>
                                  <li>
                                      <a href><i className="fas fa-phone-alt" /> &nbsp; +971 4 4508 525</a>
                                  </li>
                                  <li>
                                      <a href><i className="fas fa-envelope" /> &nbsp; info@lntinfotech.com</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="social-links">
                              <h5>Follow Us</h5>
                              <ul>
                                  <li>
                                      <a href target="_blank"><i className="fab fa-facebook-f" /></a>
                                  </li>
                                  <li>
                                      <a href target="_blank"><i className="fab fa-twitter" /></a>
                                  </li>
                                  <li>
                                      <a href target="_blank"><i className="fab fa-linkedin-in" /></a>
                                  </li>
                                  <li>
                                      <a href target="_blank"><i className="fab fa-instagram" /></a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="copyright-line">
                  Copyright 2021. Mediseva
              </div>
          </footer>
      </>
  )
}

export default Footer