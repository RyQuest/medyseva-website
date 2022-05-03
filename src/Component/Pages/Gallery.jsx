import React from 'react'

function Gallery() {
  return (
      <>
          <section id="gallery">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="head">
                              <h2>Gallery/Media</h2>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <div className="gallery-slider">
                              <div className="owl-carousel">
                                  <div className="slide">
                                      <div className="h-100">
                                          <div className="gallery-card">
                                              <div className="card">
                                                  <img src="assets/img/gallery1.jpeg" className="card-img-top" alt="..." />
                                                  <div className="card-body">
                                                      <h4>Medyseva</h4>
                                                      <p className="card-text">Activity</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="slide">
                                      <div className="h-100">
                                          <div className="gallery-card">
                                              <div className="card">
                                                  <img src="assets/img/gallery2.jpeg" className="card-img-top" alt="..." />
                                                  <div className="card-body">
                                                      <h4>Medyseva</h4>
                                                      <p className="card-text">Activity</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="slide">
                                      <div className="h-100">
                                          <div className="gallery-card">
                                              <div className="card">
                                                  <img src="assets/img/gallery3.jpeg" className="card-img-top" alt="..." />
                                                  <div className="card-body">
                                                      <h4>Medyseva</h4>
                                                      <p className="card-text">Activity</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="slide">
                                      <div className="h-100">
                                          <div className="gallery-card">
                                              <div className="card">
                                                  <img src="assets/img/gallery4.jpeg" className="card-img-top" alt="..." />
                                                  <div className="card-body">
                                                      <h4>Medyseva</h4>
                                                      <p className="card-text">Activity</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="slide">
                                      <div className="h-100">
                                          <div className="gallery-card">
                                              <div className="card">
                                                  <img src="assets/img/gallery5.jpeg" className="card-img-top" alt="..." />
                                                  <div className="card-body">
                                                      <h4>Medyseva</h4>
                                                      <p className="card-text">Activity</p>
                                                  </div>
                                              </div>
                                          </div>
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

export default Gallery