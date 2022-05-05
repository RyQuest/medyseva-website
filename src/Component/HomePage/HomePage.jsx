import React from 'react'
import Footer from '../Footer'
import PageLayout from '../Layout/PageLayout'
import ContactUs from '../Pages/ContactUs'

    export default function HomePage() {
    
        return (
            <>
                <div >
                    <PageLayout />


                    <div>


                        <section id="banner-slider">
                            <div className="top-banner-slider">
                                <div className="owl-carousel">
                                    <div className="slide">
                                        <img src="assets/img/banner/banner1.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <div className="head">
                                                        <h2>VIDEO CONSULTATION <br />WITH CITY DOCTORS IN <br /> YOUR OWN VILLAGE</h2>
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
                                        <img src="assets/img/banner/banner2.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <div className="head">
                                                        <h2>Doctor</h2>
                                                        <p>Join Medyseva today to become part of the fast-evolving<br /> medical landscape of India!</p>
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
                                                        <p>Are you an entrepreneur in rural India? Join Medyseva today<br /> to add a new source of income!</p>
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
                                    <div className="slide">
                                        <img src="assets/img/banner/banner4.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <div className="head">
                                                        <h2>NDHM/ ABHA</h2>
                                                        <p>Medyseva is supporting National Digital Health Mission</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section id="video">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="video-head">
                                            <div className="video-contain">
                                                <a href="assets/img/video/Medyseva.mp4" className="popup-link video">
                                                    <img src="assets/img/video/video.png" />
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
                        {/* <section id="award">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="head">
                                            <h2>Award</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="assets/img/award/one.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="assets/img/award/two.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="assets/img/award/three.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card">
                                            <img src="assets/img/award/four.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                        <section id="journey">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="head">
                                            <h2>Patient Journey at Medyseva</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="img">
                                            <img src="assets/img/journey.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section id="services">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="head">
                                            <h2>Services</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="services-slider">
                                            <div className="owl-carousel">
                                                <div className="slide">
                                                    <div className="h-100">
                                                        <div className="service-card">
                                                            <div className="card">
                                                                <img src="assets/img/ser/one.jpg" className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h4>Consultation</h4>
                                                                    <p className="card-text">The primary service provided by Medyseva is online/ teleconsultation. Our goal is to make the best doctors and specialists available to everyone, irrespective of their location</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide">
                                                    <div className="h-100">
                                                        <div className="service-card">
                                                            <div className="card">
                                                                <img src="assets/img/ser/two.jpg" className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h4>Pathology</h4>
                                                                    <p className="card-text">We have collaborated with the labs nearest to our centers. The samples will be collected at our centers and they will be sent to the nearest lab for testing, after which the reports.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide">
                                                    <div className="h-100">
                                                        <div className="service-card">
                                                            <div className="card">
                                                                <img src="assets/img/ser/three.jpg" className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h4>Radiology</h4>
                                                                    <p className="card-text">Radiology Since our centers are in rural areas, good radiology services may not be available there. This is where we come in. We have collaborations with the best radiology centers in the nearest cities. The patient will be guided.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide">
                                                    <div className="h-100">
                                                        <div className="service-card">
                                                            <div className="card">
                                                                <img src="assets/img/ser/four.jpg" className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h4>Hospitalization</h4>
                                                                    <p className="card-text">If a patient needs to be hospitalized, we will refer them to the nearest hospitals with which we have tie-ups. Medyseva will help the patient in transportation facilities and also through the formalities and processes.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide">
                                                    <div className="h-100">
                                                        <div className="service-card">
                                                            <div className="card">
                                                                <img src="assets/img/ser/one.jpg" className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h4>Ambulance</h4>
                                                                    <p className="card-text">We provide ambulance service for patients who need to go to our associated or any other hospital. </p>
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
                                            <img className="doc-img" src="assets/img/specialist1.png" />
                                            <h3>Dermatology </h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="specialist-box">
                                            <img className="doc-img" src="assets/img/specialist2.png" />
                                            <h3>Psychiatry</h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="specialist-box">
                                            <img className="doc-img" src="assets/img/specialist3.png" />
                                            <h3>Pulmonology</h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="specialist-box">
                                            <img className="doc-img" src="assets/img/specialist4.png" />
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
                        </section>


                        <section id="counter">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="head">
                                            <h2>Counters</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 stats col-6">
                                        <img src="assets/img/counter/one.png" />
                                        <div className="counting" data-count={520} id="plus">0</div>
                                        <h5>CONSULTATIONS</h5>
                                    </div>
                                    <div className="col-lg-3 stats col-6">
                                        <img src="assets/img/counter/two.png" />
                                        <div className="counting" data-count={425} id="plus">0</div>
                                        <h5>SPECIALTIES COVERED</h5>
                                    </div>
                                    <div className="col-lg-3 stats col-6">
                                        <img src="assets/img/counter/three.png" />
                                        <div className="counting" data-count={65} id="plus">0</div>
                                        <h5>DOCTORS ON BOARD</h5>
                                    </div>
                                    <div className="col-lg-3 stats col-6">
                                        <img src="assets/img/counter/four.png" />
                                        <div className="counting" data-count={20} id="plus">0</div>
                                        <h5>MEDYSEVA KENDRA</h5>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="team-medi-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="head">
                                            <h2>Team</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-12">
                                        <div className="team-medi-box">
                                            <img className="doc-img" src="assets/img/team1.png" />
                                            <h3>Vishesh</h3>
                                            <h6>Founder/CEO</h6>
                                            <div className="other-info-box">
                                                <p>MBBS, MBA, DEM</p>
                                                <p>10+ years experience in healthcare</p>
                                                <p>2+ years experience in rural finrech</p>
                                            </div>
                                            <div className="text-center">
                                                <a href><img src="assets/img/in.png" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-12">
                                        <div className="team-medi-box">
                                            <img className="doc-img" src="assets/img/team2.png" />
                                            <h3>Rachita</h3>
                                            <h6>Co-Founder/Marketing</h6>
                                            <div className="other-info-box">
                                                <p>B.COM(H), MBA</p>
                                                <p>Experience in healthcare and education</p>
                                                <p>SRCC Alumnus</p>
                                            </div>
                                            <div className="text-center">
                                                <a href><img src="assets/img/in.png" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-12">
                                        <div className="team-medi-box">
                                            <img className="doc-img" src="assets/img/team3.png" />
                                            <h3>Rashmi</h3>
                                            <h6>Chief Medical Officer</h6>
                                            <div className="other-info-box">
                                                <p>MBBS, MD(Pathology)</p>
                                                <p>10+ years experience in healthcare</p>
                                            </div>
                                            <div className="text-center">
                                                <a href><img src="assets/img/in.png" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-12">
                                        <div className="team-medi-box">
                                            <img className="doc-img" src="assets/img/team4.png" />
                                            <h3>Mehul</h3>
                                            <h6>Technology</h6>
                                            <div className="other-info-box">
                                                <p>B.E.,MBA</p>
                                                <p>10+ years experience in IT</p>
                                                <p>Ex- Accenture, Wipro</p>
                                            </div>
                                            <div className="text-center">
                                                <a href><img src="assets/img/in.png" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="col-md-3 col-sm-6 col-12">
               <div class="team-medi-box">
                  <img class="doc-img" src="assets/img/team5.jpg">
                  <h3>Umanshi Agrawal</h3>
                  <h6>Finance</h6>
                  <div class="other-info-box">
                     <p>B.COM, CA</p>
                     <p>5+ years experience in Taxation, Finance</p>
                     <p>& Auditing</p>
                  </div>
                  <div class="text-center">
                     <a href=""><img src="assets/img/in.png"></a>
                  </div>
               </div>
            </div> */}
                                </div>
                            </div>
                        </section>

                        <section className="team-medi-sec advisor-outer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="head">
                                            <h2>Advisors</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="team-medi-box">
                                            <img className="doc-img" src="assets/img/advisor1.png" />
                                            <h3>Dr Rajesh Kasliwal</h3>
                                            <h6>Manging Director Vishesh Jupiter, Indore</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="team-medi-box">
                                            <img className="doc-img" src="assets/img/advisor2.png" />
                                            <h3>Mr Ajay Jai</h3>
                                            <h6>IIT Khargpur Alumnus, Director CN group of companies, Ranchi</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="team-medi-box">
                                            <img className="doc-img" src="assets/img/advisor3.png" />
                                            <h3>Vasundhara Shukla</h3>
                                            <h6>Strategic consultant for healthcare startups.</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="team-medi-box">
                                            <img className="doc-img" src="assets/img/advisor4.png" />
                                            <h3>Dinesh jain</h3>
                                            <h6>a company secretory having 19 + years in finance sector, mentoring and guiding startups since many years</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


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

                        <section id="testi">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="head">
                                            <h2>Testimonials</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="testi-slider">
                                            <div className="owl-carousel">
                                                <div className="slide">
                                                    <div className="h-100">
                                                        <div className="video-contain">
                                                            <video width={320} height={240} controls src="assets/img/video/test1.mp4">
                                                            </video></div>
                                                    </div>
                                                </div>
                                                <div className="slide">
                                                    <div className="h-100">
                                                        <div className="video-contain">
                                                            <video width={320} height={240} controls src="assets/img/video/test2.mp4">
                                                            </video></div>
                                                    </div>
                                                </div>
                                                <div className="slide">
                                                    <div className="h-100">
                                                        <div className="video-contain">
                                                            <video width={320} height={240} controls src="assets/img/video/test3.mp4">
                                                            </video></div>
                                                    </div>
                                                </div>
                                                <div className="slide">
                                                    <div className="h-100">
                                                        <div className="video-contain">
                                                            <video width={320} height={240} controls src="assets/img/video/test4.mp4">
                                                            </video></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>



                        <section id="download-apps">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="img">
                                            <img src="assets/img/app.png" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="head">
                                            <h2>Doctors Can Download <br />Medyseva App</h2>
                                            <p>A powerful app that lets you manage and grow <br />your practice.</p>
                                        </div>
                                        <div className="points">
                                            <ul>
                                                <li>Manage your profile with advanced profile editor</li>
                                                <li>Respond to your patients’ feedback</li>
                                                <li>Provide online consultation to patients</li>
                                                <li>Manage your clinic with a Ray by Practo subscription</li>
                                                <li>See patient records from anywhere</li>
                                                <li>Track your clinic’s performance on the go</li>
                                                <li>Manage and track your Prime subscription</li>
                                            </ul>
                                        </div>
                                        <div className="store-icon">
                                            <img src="assets/img/gp.png" />
                                            <img src="assets/img/ap.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        
{/* 
                        <section id="testi">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="head">
                                            <h2>Testimonials</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="testi-slider">
                                            <div className="owl-carousel">
                                                <div className="slide">
                                                    <div className="test-bg">
                                                        <div className="test-card-flex">
                                                            <div className="left">
                                                                <div className="left-flex">
                                                                    <img src="assets/img/one.png" />
                                                                    <div className="profile-name">
                                                                        <h4>Babak Nivi</h4>
                                                                        <p>MDS Manufaacturing</p>
                                                                    </div>
                                                                </div>
                                                                <div className="des">
                                                                    <div className="img">
                                                                        <img src="assets/img/quotes.png" />
                                                                    </div>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <div className="left-flex">
                                                                    <img src="assets/img/one.png" />
                                                                    <div className="profile-name">
                                                                        <h4>Babak Nivi</h4>
                                                                        <p>MDS Manufaacturing</p>
                                                                    </div>
                                                                </div>
                                                                <div className="des">
                                                                    <div className="img">
                                                                        <img src="assets/img/quotes.png" />
                                                                    </div>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide">
                                                    <div className="test-bg">
                                                        <div className="test-card-flex">
                                                            <div className="left">
                                                                <div className="left-flex">
                                                                    <img src="assets/img/one.png" />
                                                                    <div className="profile-name">
                                                                        <h4>Babak Nivi</h4>
                                                                        <p>MDS Manufaacturing</p>
                                                                    </div>
                                                                </div>
                                                                <div className="des">
                                                                    <div className="img">
                                                                        <img src="assets/img/quotes.png" />
                                                                    </div>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <div className="left-flex">
                                                                    <img src="assets/img/one.png" />
                                                                    <div className="profile-name">
                                                                        <h4>Babak Nivi</h4>
                                                                        <p>MDS Manufaacturing</p>
                                                                    </div>
                                                                </div>
                                                                <div className="des">
                                                                    <div className="img">
                                                                        <img src="assets/img/quotes.png" />
                                                                    </div>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slide">
                                                    <div className="test-bg">
                                                        <div className="test-card-flex">
                                                            <div className="left">
                                                                <div className="left-flex">
                                                                    <img src="assets/img/one.png" />
                                                                    <div className="profile-name">
                                                                        <h4>Babak Nivi</h4>
                                                                        <p>MDS Manufaacturing</p>
                                                                    </div>
                                                                </div>
                                                                <div className="des">
                                                                    <div className="img">
                                                                        <img src="assets/img/quotes.png" />
                                                                    </div>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <div className="left-flex">
                                                                    <img src="assets/img/one.png" />
                                                                    <div className="profile-name">
                                                                        <h4>Babak Nivi</h4>
                                                                        <p>MDS Manufaacturing</p>
                                                                    </div>
                                                                </div>
                                                                <div className="des">
                                                                    <div className="img">
                                                                        <img src="assets/img/quotes.png" />
                                                                    </div>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
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
                        </section> */}


                        <ContactUs/>

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
                                            <p>If you are a Doctor who believes in our vision or a <br /> businessman who wants a foothold in rural India, do join us!</p>
                                            <div className="border-box">
                                                <h5>For Further Details, Call us</h5>
                                                <h4>
                                                    <a href>
                                                        <img src="assets/img/call.png" />+91 75669 75666</a></h4><a href>
                                                </a>
                                            </div>
                                            <h5>Or send in your resume to </h5>
                                            <p>
                                                <a href><i className="fas fa-envelope" /> &nbsp; info@lntinfotech.com</a>
                                            </p>
                                            {/* <h5>Doctors can download our App</h5>
                      <a style="text-decoration: none;" href="https://www.practo.com/consult" target="_blank"><h4 class="mb-0"> https://www.practo.com/consult</h4></a>
                      <a style="text-decoration: none;" href="https://www.practo.com/providers/clinics/profile" target="_blank"><h4 class="mb-5"> https://www.practo.com/providers/clinics/profile</h4></a> */}
                                            <div className="btn1">
                                                <a href>Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>


                    <Footer />
                </div>
            </>
        )
    };

