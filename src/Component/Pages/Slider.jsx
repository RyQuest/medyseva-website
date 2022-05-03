import React from 'react'

function Slider() {
  return (
      <>
          <section id="banner-slider">
              <div className="top-banner-slider">
                  <div className="owl-carousel">
                      <div className="slide">
                          <img src="assets/img/banner/banner2.jpg" alt="images not found" />
                          <div className="cover">
                              <div className="container">
                                  <div className="header-content">
                                      <div className="head">
                                          <h2>VIDEO CONSULTATION</h2>
                                          <p>Video consultation with city doctors in your own village</p>
                                          <ul>
                                              <li>Visit the nearest kendra - Save money and time</li>
                                              <li>Consult with the best specialists</li>
                                              <li>Safeguard yourself from malpractices of quacks</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="slide">
                          <img src="assets/img/banner/banner1.jpg" alt="images not found" />
                          <div className="cover">
                              <div className="container">
                                  <div className="header-content">
                                      <div className="head">
                                          <h2>Doctor</h2>
                                          <p>Join Medyseva today to become part of the fast-evolving<br /><br /> medical landscape of India!</p>
                                          <ul>
                                              <li>Consult in your free time as per your convenience</li>
                                              <li>Maximize your earningss</li>
                                              <li>Change the lives of rural Indians</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="slide">
                          <img src="assets/img/banner/banner3.jpg" alt="images not found" />
                          <div className="cover">
                              <div className="container">
                                  <div className="header-content">
                                      <div className="head">
                                          <h2>Village Enterpreneur</h2>
                                          <p>Are you an entrepreneur in rural India? Join Medyseva today<br /><br /> to add a new source of income!</p>
                                          <ul>
                                              <li>Launch a Medyseva Kendrawith minimal investment</li>
                                              <li>Maximize your earnings</li>
                                              <li>Help your fellow villagers to improve their health</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Slider