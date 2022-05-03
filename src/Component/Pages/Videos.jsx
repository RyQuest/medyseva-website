import React from 'react'

function Videos() {
  return (
      <>
          <section id="video">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="video-head">
                              <div className="video-contain">
                                  <a href="assets/img/video/Medyseva.mp4" className="popup-link video">
                                      <img src="assets/img/video/video.png" alt="..."/>
                                  </a>
                              </div>
                          </div>
                          <div className="des">
                              <h2>About <span>Us</span></h2>
                              <p>Medyseva is a healthcare startup focusing on Telemedicine in Rural India. It seeks to become the ultimate healthcare partner of all citizens such that they can get access to high quality healthcare services with ease and at affordable prices. It bridges the gap between the urban doctors and rural patients through Medyseva Kendras having state-of-the-art technology, which cover the entire spectrum of services that are needed to keep one healthy - from having virtual consultations to getting surgeries, from booking diagnostic tests to digitizing medical records.</p>
                              <div className="col-md-12">
                                  <div className="btn1">
                                      <a href>Know More</a>
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

export default Videos