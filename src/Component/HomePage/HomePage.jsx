import React, { useState } from 'react'
import Footer from '../Footer'
import PageLayout from '../Layout/PageLayout'
import ContactUs from '../Pages/ContactUs'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axios } from '../../http';


export default function HomePage() {
    const startone =()=>{
        const start1 =  document.getElementById("vid1")
        const start2 =  document.getElementById("vid2")
        const start3 =  document.getElementById("vid3")
        const start4 =  document.getElementById("vid4")
        start1.controls = true
        start2.controls = true
        start3.controls = true
        start4.controls = true
    }
    const  closevideo = ()=>{
        const new11 = document.getElementById("vid1")
        const new12 = document.getElementById("vid2")
        const new13 = document.getElementById("vid3")
        const new14 = document.getElementById("vid4")
        new11.pause()
        new12.pause()
        new13.pause()
        new14.pause()
    }

    const [joinTab, setJoinTab] = useState(1);

    const HandleDoctorSubmit = async (values) => {
        const res = await axios.post(`api/contact_us?contactus_type=${"doctor"}&doctor_name=${values.doctor_name}&doctor_email=${values.doctor_email}&doctor_number=${values.doctor_number}&doctor_specialization=${values.doctor_specialization}&center_name=${values.center_name}&center_phone_num=${values.center_phone_num}&center_address=${values.center_address}&center_email=${values.center_email}`)
            .then((res) => {
                console.log(res.data.msg);
                toast(res.data.msg)
            }).catch((err) => {
                toast(err.message);
            })
    }
    const HandleCenterSubmit = async (values) => {
        const res = await axios.post(`api/contact_us?contactus_type=${"center"}&doctor_name=${values.doctor_name}&doctor_email=${values.doctor_email}&doctor_number=${values.doctor_number}&doctor_specialization=${values.doctor_specialization}&center_name=${values.center_name}&center_phone_num=${values.center_phone_num}&center_address=${values.center_address}&center_email=${values.center_email}`)
            .then((res) => {
                console.log(res.data.msg);
                toast(res.data.msg)
            }).catch((err) => {
                toast(err.message);
            })

    }

    const validationSchema = Yup.object({
        doctor_name: Yup.string().trim().required('Doctor name is required'),
        doctor_email: Yup.string().email().typeError().required('E-mail id required'),
        doctor_number: Yup.string()
            .trim()
            .min(10)
            .max(10)
            .required("Phone number is required"),
        doctor_specialization: Yup.string().required("Specialization is required")
    })
    const validationSchema1 = Yup.object({
        center_name: Yup.string().trim().required('Name is required'),
        center_email: Yup.string().email().typeError().required('E-mail id required'),
        center_number: Yup.string()
            .trim()
            .min(10)
            .max(10)
            .required("Phone number is required"),
        center_address: Yup.string().required("Address is required")
    })

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
                                                    <h2>GET VIDEO CONSULTATION <br />WITH CITY DOCTORS IN <br /> YOUR OWN VILLAGE</h2>
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
                                                    <h2>Are you a Doctor?</h2>
                                                    <p>Join Medyseva today to become part of the fast-evolving<br /> medical landscape of India!</p>
                                                    <ul>
                                                        <li>Consult in your free time as per your convenience</li>
                                                        <li>Maximize your earnings</li>
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
                                                    <h2>Are you a Village Entrepreneur?</h2>
                                                    <p>Are you an entrepreneur in rural India? Join Medyseva today<br /> to add a new source of income!</p>
                                                    <ul>
                                                        <li>Launch a Medyseva Kendra with minimal investment</li>
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
                                                    <h2>We are supporting National<br /> Digital Health Mission</h2>
                                                    {/* <p> We are supporting National Digital Health Mission</p> */}
                                                    <p>Medyseva will soon be a part of ABHA, a Government initiative for creating <br />India’s Digital Health Ecosystem
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="video">
                        <div className="container" id="about">
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
                                        <h2>About Us</h2>
                                        <p>Medyseva is a healthcare startup focusing on Telemedicine in Rural India. It seeks to become the ultimate healthcare partner of all citizens such that they can get access to high quality healthcare services with ease and at affordable prices. It bridges the gap between the urban doctors and rural patients through Medyseva Kendras having state-of-the-art technology, which cover the entire spectrum of services that are needed to keep one healthy - from having virtual consultations to getting surgeries, from booking diagnostic tests to digitizing medical records.</p>
                                        <div className="col-md-12">
                                            <div className="btn1">
                                                <a data-bs-toggle="modal" data-bs-target="#about-us">Know More</a>
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
                                                            <img src="assets/img/consattation.png" className="card-img-top" alt="..." />
                                                            <div className="card-body">
                                                                <h4>Consultation</h4>
                                                                <p className="card-text">India’s best doctors across various specialties provide video consultation at affordable prices on the Medyseva platform.
                                                                </p>
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
                                                                <p className="card-text">Samples are collected at our centers and tested at our local associated labs. The patient does not need to deliver samples or collect reports himself.
                                                                </p>
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
                                                                <p className="card-text">We have collaborations with the best radiology centers in the nearest cities. The patient is guided throughout the entire process.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="service-card">
                                                        <div className="card">
                                                            <img src="assets/img/hospitalzation.png" className="card-img-top" alt="..." />
                                                            <div className="card-body">
                                                                <h4>Hospitalization</h4>
                                                                <p className="card-text">For a patient who needs to be hospitalized, Medyseva assists the patient in transportation facilities to the nearest associated hospital and through the formalities and processes of the admission.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="service-card">
                                                        <div className="card">
                                                            <img src="assets/img/image_2022_05_12T13_39_41_049Z.png" className="card-img-top" alt="..." />
                                                            <div className="card-body">
                                                                <h4>Ambulance</h4>
                                                                <p className="card-text">We provide ambulance service for patients who need to go to our associated or any other hospital.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="service-card">
                                                        <div className="card">
                                                            <img src="assets/img/MedySeva1.jpg" className="card-img-top" alt="..." />
                                                            <div className="card-body">
                                                                <h4>Home Care Service </h4>
                                                                <p className="card-text">For patients who are advised bedrest or who need to stay at home for their long recovery process, we provide trained nurses and other care- takers.
                                                                </p>
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
                                        <a className='text-white' data-bs-toggle="modal" data-bs-target="#Specialities">Know More</a>
                                    </div>
                                </div>
                            </div>

                            {/*<div className="row">
                                <div className="col-sm-3">
                                    <div className="specialist-box">
                                        <img className="doc-img" src="assets/img/specialist1.png" />
                                        <h3>Dermatology </h3>
                                    </div>
                                    <div className="col-lg-3 stats col-6">
                                        <img src="assets/img/counter/one.png" />
                                        <div className="counting" data-count={3000} id="plus">0</div>
                                        <h5>CONSULTATIONS</h5>
                                    </div>
                                    <div className="col-lg-3 stats col-6">
                                        <img src="assets/img/counter/two.png" />
                                        <div className="counting" data-count={30} id="plus">0</div>
                                        <h5>SPECIALTIES COVERED</h5>
                                    </div>
                                    <div className="col-lg-3 stats col-6">
                                        <img src="assets/img/counter/three.png" />
                                        <div className="counting" data-count={100} id="plus">0</div>
                                        <h5>DOCTORS ON BOARD</h5>
                                   </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="btn1">
                                        <a href>Know More</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </section>


                    <section id="counter">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <div className="head">
                                        <h2>Counters</h2>
                                    </div> */}
                                </div>
                                <div className="col-lg-3 stats col-6">
                                    <img src="assets/img/counter/one.png" />
                                    <div className="counting" data-count={2500} id="plus">0</div>
                                    <h5>CONSULTATIONS</h5>
                                </div>
                                <div className="col-lg-3 stats col-6">
                                    <img src="assets/img/counter/two.png" />
                                    <div className="counting" data-count={23} id="plus">0</div>
                                    <h5>SPECIALTIES COVERED</h5>
                                </div>
                                <div className="col-lg-3 stats col-6">
                                    <img src="assets/img/counter/three.png" />
                                    <div className="counting" data-count={200} id="plus">0</div>
                                    <h5>DOCTORS ON BOARD</h5>
                                </div>
                                <div className="col-lg-3 stats col-6">
                                    <img src="assets/img/counter/four.png" />
                                    <div className="counting" data-count={15} id="plus">0</div>
                                    <h5>MEDYSEVA KENDRA</h5>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='team' className="team-medi-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="head">
                                        <h2>Team</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="team-medi-box">
                                        <img className="doc-img" src="assets/img/team1.png" />
                                        <h3>DR.VISHESH KASLIWAL</h3>
                                        <h6 style={{ color: "", fontWeight: "bold" }}>FOUNDER/CEO</h6>
                                        <div className="other-info-box">
                                            <p>MBBS, MBA, DEM</p>
                                            <p>10+ years experience in healthcare</p>
                                            <p>2+ years experience in rural finrech</p>
                                        </div>
                                        <div className="text-center">
                                            <a href="https://www.linkedin.com/in/dr-vishesh-kasliwal/?trk=public_profile_browsemap&originalSubdomain=in&original_referer=" target={'_blank'}><img src="assets/img/in.png" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="team-medi-box">
                                        <img className="doc-img" src="assets/img/team2.png" />
                                        <h3>RACHITA KASLIWAL</h3>
                                        <h6>CO-FOUNDER/MARKETING</h6>
                                        <div className="other-info-box">
                                            <p>B.COM(H), MBA</p>
                                            <p>Experience in healthcare and education</p>
                                            <p>SRCC Alumnus</p>
                                        </div>
                                        <div className="text-center">
                                            <a href="https://www.linkedin.com/in/rachita-kasliwal89/?originalSubdomain=in" target={'_blank'}><img src="assets/img/in.png" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="team-medi-box">
                                        <img className="doc-img" src="assets/img/team3.png" />
                                        <h3>DR.RASHMI PATIDAR</h3>
                                        <h6>CHIEF MEDICAL OFFICER</h6>
                                        <div className="other-info-box">
                                            <p>MBBS, MD(Pathology)</p>
                                            <p>10+ years experience in healthcare</p>
                                        </div>
                                        <div className="text-center">
                                            <a href="https://www.linkedin.com/in/dr-rashmi-patidar-367398238/" target={'_blank'}><img src="assets/img/in.png" /></a>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="row" style={{ justifyContent: "center" }}>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="team-medi-box">
                                        <img className="doc-img" src="assets/img/Medyseva_Mehul (1).png" />
                                        <h3>MEHUL JAIN</h3>
                                        <h6>TECHNOLOGY</h6>
                                        <div className="other-info-box">
                                            <p>B.E.,MBA</p>
                                            <p>10+ years experience in IT</p>
                                            <p>Ex- Accenture, Wipro</p>
                                        </div>
                                        <div className="text-center">
                                            <a href="https://www.linkedin.com/in/mehul-jain-13269112/" target={'_blank'}><img src="assets/img/in.png" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-6 col-12">
                                    <div class="team-medi-box">
                                        <img class="doc-img" src="assets/img/team5.jpg" />
                                        <h3>UMANSHI AGRAWAL</h3>
                                        <h6>FINANCE</h6>
                                        <div class="other-info-box">
                                            <p>B.COM, CA</p>
                                            <p>5+ years experience in Taxation, Finance</p>
                                            <p>& Auditing</p>
                                        </div>
                                        <div class="text-center">
                                            <a href="https://www.linkedin.com/in/ca-umanshi-agrawal/" target={'_blank'}><img src="assets/img/in.png" /></a>
                                        </div>
                                    </div>
                                </div>
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
                                        <h3>Dr. Rajesh Kasliwal</h3>
                                        <h6>Managing Director Vishesh Jupiter Hospital, Indore
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="team-medi-box">
                                        <img className="doc-img" src="assets/img/advisor2.png" />
                                        <h3>Mr. Ajay Jain</h3>
                                        <h6>Director - CN group of Companies, Ranchi IIT Kharagpur Alumnus
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="team-medi-box newbox1">
                                        <img className="doc-img" src="assets/img/advisor3.png" />
                                        <h3>Ms.Vasundhara Shukla</h3>
                                        <h6>Strategic consultant for healthcare startups.</h6>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="team-medi-box">
                                        <img className="doc-img" src="assets/img/advisor4.png" />
                                        <h3>Mr. Dinesh Jain</h3>
                                        <h6>A company secretary having 19 + years in finance sector, mentoring and guiding startups since many years
                                        </h6>
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
                                                            {/* <div className="card-body">
                                                                <h4>Medyseva</h4>
                                                                <p className="card-text">Activity</p>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="gallery-card">
                                                        <div className="card">
                                                            <img src="assets/img/gallery2.jpeg" className="card-img-top" alt="..." />
                                                            {/* <div className="card-body">
                                                                <h4>Medyseva</h4>
                                                                <p className="card-text">Activity</p>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="gallery-card">
                                                        <div className="card">
                                                            <img src="assets/img/gallery3.jpeg" className="card-img-top" alt="..." />
                                                            {/* <div className="card-body">
                                                                <h4>Medyseva</h4>
                                                                <p className="card-text">Activity</p>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="gallery-card">
                                                        <div className="card">
                                                            <img src="assets/img/gallery4.jpeg" className="card-img-top" alt="..." />
                                                            {/* <div className="card-body">
                                                                <h4>Medyseva</h4>
                                                                <p className="card-text">Activity</p>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="gallery-card">
                                                        <div className="card">
                                                            <img src="assets/img/gallery5.jpeg" className="card-img-top" alt="..." />
                                                            {/* <div className="card-body">
                                                                <h4>Medyseva</h4>
                                                                <p className="card-text">Activity</p>
                                                            </div> */}
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
                                                    <div className="video-contain" data-bs-toggle="modal" data-bs-target="#video11" onClick={()=>{
                                                        startone()
                                                    }}>
                                                        <video style={{background:"black"}} width={320} height={240}  src="assets/img/video/test1.mp4">
                                                        </video></div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="video-contain" data-bs-toggle="modal" data-bs-target="#video12" onClick={()=>{
                                                        startone()
                                                    }} >
                                                        <video style={{background:"black"}} width={320} height={240}  src="assets/img/video/test2.mp4">
                                                        </video></div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="video-contain" data-bs-toggle="modal" data-bs-target="#video13" onClick={()=>{
                                                        startone()
                                                    }}>
                                                        <video style={{background:"black"}} width={320} height={240} src="assets/img/video/test3.mp4">
                                                        </video></div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="h-100">
                                                    <div className="video-contain" data-bs-toggle="modal" data-bs-target="#video14" onClick={()=>{
                                                        startone()
                                                    }}>
                                                        <video style={{background:"black"}} width={320} height={240}  src="assets/img/video/test4.mp4">
                                                        </video>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <ContactUs />


                    
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
                                            {/*<li>Manage your clinic with a Ray by Practo subscription</li>*/}
                                            <li>See patient records from anywhere</li>
                                            {/*<li>Track your clinic’s performance on the go</li>
                                                <li>Manage and track your Prime subscription</li> */}
                                        </ul>
                                    </div>
                                    <div className="store-icon">
                                        <a target="_blank" href="https://www.practo.com/consult ">
                                        <img src="assets/img/gp.png" /></a>
                                        <a target="_blank" href="https://www.practo.com/providers/clinics/profile">
                                        <img src="assets/img/ap.png" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>


                    {/* <section className="joinus-medi-sec" id="join-us">
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
                                            <a href><i className="fas fa-envelope" /> &nbsp; info@medyseva.com</a>
                                        </p>
                                        <div className="btn1">
                                            <a className='text-white' data-bs-toggle="modal" data-bs-target="#join-form">Apply Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section> */}
                                        {/* <h5>Doctors can download our App</h5>
                      <a style="text-decoration: none;" href="https://www.practo.com/consult" target="_blank"><h4 class="mb-0"> https://www.practo.com/consult</h4></a>
                      <a style="text-decoration: none;" href="https://www.practo.com/providers/clinics/profile" target="_blank"><h4 class="mb-5"> https://www.practo.com/providers/clinics/profile</h4></a> */}

                </div>
                {/* video one model box */}
                <div className="modal fade" id="video11" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" style={{justifyContent:"center"}} id='aboutUs_modal'>
                        <div className="modal-content widthmodle">
                            <div className="modal-header">
                                <button type="button" onClick={()=>{
                                    closevideo()
                                }} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="content-des modlevid">
                                <video width={400} height={350} id="vid1" src="assets/img/video/test1.mp4">
                                                        </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* video two model box */}
                <div className="modal fade" id="video12" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" style={{justifyContent:"center"}} id='aboutUs_modal'>
                        <div className="modal-content widthmodle">
                            <div className="modal-header">
                                <button type="button" onClick={()=>{
                                    closevideo()
                                }} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="content-des modlevid">
                                <video width={400} height={350} id="vid2"  src="assets/img/video/test2.mp4"> </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* video three model box */}
                <div className="modal fade" id="video13" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" style={{justifyContent:"center"}} id='aboutUs_modal'>
                        <div className="modal-content widthmodle">
                            <div className="modal-header">
                                <button type="button" onClick={()=>{
                                    closevideo()
                                }} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="content-des modlevid">
                                <video width={400} height={350} id="vid3" src="assets/img/video/test3.mp4"></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* video four model box */}
                 <div className="modal fade" id="video14" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" style={{justifyContent:"center"}} id='aboutUs_modal'>
                        <div className="modal-content widthmodle">
                            <div className="modal-header">
                                <button type="button" onClick={()=>{
                                    closevideo()
                                }} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="content-des modlevid">
                                <video width={400} height={350} id="vid4" src="assets/img/video/test4.mp4"> </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="about-us" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" id='aboutUs_modal'>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">About Us</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="content-des">
                                    {/* <p><span>Medyseva</span> is a healthcare startup focusing on Telemedicine in Rural India. It seeks to become the ultimate healthcare partner of all citizens such that they can get access to high quality healthcare services with ease and at affordable prices. It bridges the gap between the urban doctors and rural patients through Medyseva Kendras having state-of-the-art technology, which cover the entire spectrum of services that are needed to keep one healthy - from having virtual consultations to getting surgeries, from booking diagnostic tests to digitizing medical records.</p> */}

                                    <p>Citizens in rural India face many challenges when it comes to medical treatment. They have to either spend a lot of money and time going to nearby cities for treatment or fall back on local doctors who may be unqualified/ underqualified. They might not be comfortable with mobile apps. Medyseva helps them to overcome these problems.</p>

                                    <p>Like many startup stories, our journey too began during the Covid pandemic. We realized that our friends and relatives in rural areas did not have access to good doctors and were unaware of or uncomfortable with mobile apps. That is when Medyseva was born, providing video consultation through our phygital centers – an ideal mix of online and offline. In July 2021, we launched two Medyseva Kendras in Madhya Pradesh and since then have been expanding our reach across Central India.</p>

                                    <p ><span>Mission: </span>To ensure that every rural citizen of India has access to high quality doctors and medical services at their convenience and at affordable prices.</p>

                                    <p ><span>Vision:</span> To be the nearest, affordable and the most reliable healthcare destination for the rural citizens of India.</p>
                                    <p ><span>Awards received: </span><br/>
                                    <ul>
                                        <li>
                                        Global Hackathon conducted by MERI College, Delhi 
                                        </li>
                                        <li>
                                        Global Entrepreneur summit 2022 conducted by Jai Hind College, Mumbai. 
                                        </li>
                                        <li>
                                        Heart Pitch competition conducted by TiE MP 
                                        </li>
                                        <li>
                                        Hubli TiECON Business Pitch Competition 
                                        </li>
                                    </ul>
                                        {/* ⦁	Global Hackathon conducted by MERI College, Delhi<br/>
                                        ⦁	Global Entrepreneur summit 2022 conducted by Jai Hind College, Mumbai.<br/>
                                        ⦁	Heart Pitch competition conducted by TiE MP<br/>
                                        ⦁	Hubli TiECON Business Pitch Competition<br/> */}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="Specialities" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Specialities</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="special-points">
                                    <ul>
                                        <li>Internal Medicine</li>
                                        <li>Physiotherapy</li>
                                        <li>Dermatology</li>
                                        <li>Orthopedics</li>
                                        <li>Obstertrics and gynaecology</li>
                                        <li>Pediatrics</li>
                                        <li>Oncology</li>
                                        <li>General surgery</li>
                                        <li>Psychiatry</li>
                                        <li>Otolaryngology</li>
                                        <li>Pulmonology</li>
                                        <li>Neurology</li>
                                        <li>Cardiology</li>
                                        <li>Gastroenterologist</li>
                                        <li>Urology</li>
                                        <li>Nephrology</li>
                                        <li>Dentistry</li>
                                        <li>Gynaecology</li>
                                        <li>MD Medicine</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="join-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="head-modal">
                                <button type="button">
                                    <i class="fas fa-times close" data-bs-dismiss="modal" aria-label="Close"></i>
                                </button>
                                <div className="title">
                                    <h3>Apply Now</h3>
                                    <p>Submit the form below and we’ll get back to you.</p>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div class="row">
                                    <div class="col-md-6 col-6" >
                                        <button className={joinTab === 1 ? 'active' : ''} onClick={() => setJoinTab(1)}>
                                            Doctor
                                        </button>
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <button className={joinTab === 2 ? 'active' : ''} onClick={() => setJoinTab(2)}>
                                            Own a Center
                                        </button>
                                    </div>
                                    <div class="col-md-12">
                                        {joinTab === 1 && <div className='head-form'>
                                            <Formik
                                                enableReinitialize
                                                initialValues={{
                                                    contactus_type: "doctor",
                                                    doctor_name: "",
                                                    doctor_email: "",
                                                    doctor_number: "",
                                                    doctor_specialization: "",
                                                }}
                                                validationSchema={validationSchema}
                                                onSubmit={(values) => {
                                                    console.log(values);
                                                    HandleDoctorSubmit(values);
                                                }}
                                            >
                                                {({
                                                    values,
                                                    errors,
                                                    touched,
                                                    handleChange,
                                                    handleBlur,
                                                    handleSubmit,
                                                }) => (
                                                    <div className="row">
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="col-md-12">
                                                                <div className="input-field">
                                                                    <span>Doctor Name</span>
                                                                    <input type="text" name="doctor_name" value={values.doctor_name} placeholder='Enter Your Name' onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    ></input>
                                                                </div>
                                                                <div className="error-message">
                                                                    {errors.doctor_name && touched.doctor_name && errors.doctor_name}
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="input-field">
                                                                    <span>Specialization</span>
                                                                    <input type="text" name="doctor_specialization" value={values.doctor_specialization} placeholder='Enter Specialization' onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    ></input>
                                                                </div>
                                                                <div className="error-message">
                                                                    {errors.doctor_specialization && touched.doctor_specialization && errors.doctor_specialization}
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="input-field">
                                                                    <span>Contact Number</span>
                                                                    <input type="number" name="doctor_number" value={values.doctor_number} placeholder='Enter Your Number' onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    ></input>
                                                                    <div className="error-message">
                                                                        {errors.doctor_number && touched.doctor_number && errors.doctor_number}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="input-field">
                                                                    <span>Email</span>
                                                                    <input type="email" name="doctor_email" value={values.doctor_email} placeholder='Enter Your Email' onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    ></input>
                                                                    <div className="error-message">
                                                                        {errors.doctor_email && touched.doctor_email && errors.doctor_email}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="input-field d-flex justify-content-center">
                                                                    <input type="submit" value="submit" ></input>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                )}
                                            </Formik>
                                        </div>}
                                        {joinTab === 2 && <div className='head-form'>
                                            <Formik
                                                enableReinitialize
                                                initialValues={{
                                                    contactus_type: "center",
                                                    center_name: "",
                                                    center_email: "",
                                                    center_number: "",
                                                    center_address: "",
                                                }}
                                                validationSchema={validationSchema1}
                                                onSubmit={(values) => {
                                                    console.log(values);
                                                    HandleCenterSubmit(values);
                                                }}
                                            >
                                                {({
                                                    values,
                                                    errors,
                                                    touched,
                                                    handleChange,
                                                    handleBlur,
                                                    handleSubmit,
                                                }) => (
                                                    <div className="row">
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="col-md-12">
                                                                <div className="input-field">
                                                                    <span> Name</span>
                                                                    <input type="text" name="center_name" value={values.center_name} placeholder='Enter Your Name' onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    ></input>
                                                                    <div className="error-message">
                                                                        {errors.center_name && touched.center_name && errors.center_name}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12">
                                                                <div className="input-field">
                                                                    <span>Phone Number</span>
                                                                    <input type="number" name="center_number" value={values.center_number} placeholder='Enter Your Number' onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    ></input>
                                                                    <div className="error-message">
                                                                        {errors.center_number && touched.center_number && errors.center_number}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="input-field">
                                                                    <span>Address </span>
                                                                    <input type="text" name="center_address" value={values.center_address} placeholder='Enter Your Address' onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    ></input>
                                                                    <div className="error-message">
                                                                        {errors.center_address && touched.center_address && errors.center_address}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="input-field">
                                                                    <span>Email</span>
                                                                    <input type="email" name="center_email" value={values.center_email} placeholder='Enter Your Email' onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    ></input>
                                                                    <div className="error-message">
                                                                        {errors.center_email && touched.center_email && errors.center_email}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="input-field d-flex justify-content-center">
                                                                    <input type="submit" value="submit" ></input>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                )}
                                            </Formik>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
            <ToastContainer />
        </>
    )
};

