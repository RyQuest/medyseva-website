import React from 'react'

function ContactUs() {
  return (
      <>
          <section id="contact-info">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="contact-form">
                              <div className="head">
                                  <h2>Contact Us</h2>
                              </div>
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="input-field">
                                              <input type="text" name="first_name" placeholder="Name*" />
                                          </div>
                                          <div className="col-md-12">
                                              <div className="input-field">
                                                  <input type="number" name="first_name" placeholder="Mobile" />
                                              </div>
                                          </div>
                                          <div className="col-md-12">
                                              <div className="input-field">
                                                  <input type="email" name="first_name" placeholder="Email*" />
                                              </div>
                                          </div>
                                          <div className="col-md-12">
                                              <div className="input-field">
                                                  <div className="dropdown">
                                                      <div className="select">
                                                          <span>Patient</span>
                                                          <i className="fa fa-chevron-down" />
                                                      </div>
                                                      <input type="hidden" name="gender" />
                                                      <ul className="dropdown-menu">
                                                          <li id>Patient</li>
                                                          <li id>Doctor</li>
                                                          <li id>Business Owner</li>
                                                          <li id>Hospital</li>
                                                          <li id>Laboratory</li>
                                                          <li id>Job Seeker</li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="col-md-5 col-offset-1">
                          <div className="info-txt">
                              <p>For assistance in case of any <br />medical emergency, call on our <br />24-hour helpline:</p>
                              <div className="info-links">
                                  <p>
                                      <a href><i className="fas fa-phone-alt" /> &nbsp; +91 75669 75666</a>
                                  </p>
                              </div>
                              <div className="social-links">
                                  <ul>
                                      <li>
                                          <a href target="_blank"><i className="fab fa-facebook-f" /></a>
                                      </li>
                                      <li>
                                          <a href target="_blank"><i className="fab fa-twitter" /></a>
                                      </li>
                                      <li>
                                          <a href target="_blank"><i className="fab fa-instagram" /></a>
                                      </li>
                                      <li>
                                          <a href target="_blank"><i className="fab fa-whatsapp" /></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default ContactUs