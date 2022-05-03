import React from 'react'

function JoinUs() {
  return (
    <>
          <section className="joinus-medi-sec">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                          <div className="head">
                              <h2>Join Us</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-8 m-auto">
                          <div className="jon-us-inner-box">
                              <p>If you are a Doctor who believes in our vision or a <br /><br /> businessman who wants a foothold in rural India, do join us!</p>
                              <div className="border-box">
                                  <h5>For Further Details, Call us</h5>
                                  <h4><img src="assets/img/call.png" alt="..."/> +91 75669 75666</h4>
                              </div>
                              <h5>Or send in your resume to </h5>
                              <p>
                                  <a href><i className="fas fa-envelope" /> &nbsp; info@lntinfotech.com</a>
                              </p>
                              {/* <h5>Doctors can download our App</h5> * /}
                              {/* <a style="text-decoration: none;" href="https://www.practo.com/consult" target="_blank"><h4 class="mb-0"> https://www.practo.com/consult</h4></a>
                              <a style="text-decoration: none;" href="https://www.practo.com/providers/clinics/profile" target="_blank"><h4 class="mb-5"> https://www.practo.com/providers/clinics/profile</h4></a> */}
                              <div className="btn1">
                                  <a href>Apply Now</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default JoinUs