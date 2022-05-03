import React from 'react'

function Specialist() {
  return (
      <>
          <section className="specialist-medi-sec">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                          <div className="head">
                              <h2>Specialities</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-3">
                          <div className="specialist-box">
                              <img className="doc-img" src="assets/img/specialist1.png" alt="..."/>
                              <h3>Dermatology </h3>
                          </div>
                      </div>
                      <div>
                          <div className="col-sm-3">
                              <div className="specialist-box">
                                  <img className="doc-img" src="assets/img/specialist2.png" alt="..."/>
                                  <h3>Psychiatry</h3>
                              </div>
                          </div>
                          <div className="col-sm-3">
                              <div className="specialist-box">
                                  <img className="doc-img" src="assets/img/specialist3.png" alt="..."/>
                                  <h3>Pulmonology</h3>
                              </div>
                          </div>
                          <div className="col-sm-3">
                              <div className="specialist-box">
                                  <img className="doc-img" src="assets/img/specialist4.png" alt="..."/>
                                  <h3>Physiotherapy</h3>
                              </div>
                          </div>
                          <div className="col-md-12">
                              <div className="btn1">
                                  <a href>Know More</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      </>
  )
}

export default Specialist