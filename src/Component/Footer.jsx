import React from 'react'

function Footer() {
  return (
      <>
          <footer id="footer">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3">
                          <div className="foter-img">
                              <img src="assets/img/logo/logo.png" />
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="footer-links">
                              <ul>
                                  <li>
                                      <a href="#about">About Us</a>
                                  </li>
                                  <li>
                                      <a href="#services">Services</a>
                                  </li>
                                  <li>
                                      <a href>Testimonials</a>
                                  </li>
                                  <li>
                                      <a href>Blogs</a>
                                  </li>
                                  <li>
                                      <a href="#services">Join Us</a>
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
                                      <a href><i className="fas fa-phone-alt" /> &nbsp; +91 75669 75666</a>
                                  </li>
                                  <li>
                                      <a href><i className="fas fa-envelope" /> &nbsp; info@medyseva.com</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="social-links">
                              <h5>Follow Us</h5>
                              <ul>
                                  <li>
                                      <a href="https://www.facebook.com/Medyseva/" target="_blank"><i className="fab fa-facebook-f" /></a>
                                  </li>
                                  <li>
                                      <a href="https://mobile.twitter.com/medyseva" target="_blank"><i className="fab fa-twitter" /></a>
                                  </li>
                                  <li>
                                      <a href="https://www.linkedin.com/company/medyseva/" target="_blank"><i className="fab fa-linkedin-in" /></a>
                                  </li>
                                  <li>
                                      <a href="https://www.instagram.com/medy.seva/?utm_medium=copy_link" target="_blank"><i className="fab fa-instagram" /></a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="copyright-line">
                  Copyright@2022. Medyseva
              </div>
          </footer>
      </>
  )
}

export default Footer