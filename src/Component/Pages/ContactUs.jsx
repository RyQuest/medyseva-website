import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactUs() {
    const validationSchema = Yup.object({
        name: Yup.string().trim().required('Name is required'),
        email: Yup.string().email().typeError().required('E-mail id required'),
        mobile: Yup.string()
            .trim()
            .min(10)
            .max(10)
            .required("Phone number is required"),
        type: Yup.string().required("Details is required")
    })

    // const submitting =async (values) => {
    //     // console.log(values);
    //     const res = await axios.post(`http://api.medyseva.com/api/contact_us?name=${values.name}&email=${values.email}&number=${values.mobile}&message=${values.type}`)
    //         .then((res) => {
    //         console.log(res);
    //         toast(res.data.msg)
    //     }).catch((err) => {
    //         toast(err.message);
    //     })
    // }
    const [inputdata,setInputdata] = useState({
        name:"",
        email:"",
        mobile:"",
        type:""
    })
    const formdata = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setInputdata({...inputdata,[name]:value})
    }
    const myfunction = async () => {
        // console.log(values)
        // const payload = { ...values }
        // console.log(payload);
        const response = await axios.post('https://api.medyseva.com/api/contact_us', inputdata)
            .then((response) => {
                console.log(response);
                toast(response.data.msg)
            }).catch((err) => {
                toast(err.message);
            })
    }

    return (
        <>
            <section id="contact-info">
                <div className="container">
                    <div className="row">

                        <Formik
                            // enableReinitialize
                            // initialValues={{
                            //     name: "",
                            //     email: "",
                            //     mobile: "",
                            //     type: "",
                            // }}
                            validationSchema={validationSchema}
                            // onSubmit={(values) => {
                            //     // console.log(values);
                            //     // submitting(values);
                            // }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            }) => (
                                <div className="col-md-6">
                                    <div className="contact-form">
                                        <div className="head">
                                            <h2>Contact Us</h2>
                                        </div>
                                        <div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="input-field">
                                                        <input type="text" name="name" value={inputdata.name} placeholder="Name*" onChange={formdata} 
                                                            onBlur={handleBlur} />
                                                    </div>
                                                    <div className="error-message1">
                                                        {errors.name && touched.name && errors.name}
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="input-field">
                                                            <input type="number" name="mobile" value={inputdata.mobile} placeholder="Mobile" onChange={formdata} 
                                                                onBlur={handleBlur} />
                                                        </div>
                                                        <div className="error-message1">
                                                            {errors.number && touched.number && errors.number}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="input-field">
                                                            <input type="email" name="email" value={inputdata.email} placeholder="Email*" onChange={formdata} 
                                                                onBlur={handleBlur} />
                                                        </div>
                                                        <div className="error-message1">
                                                            {errors.email && touched.email && errors.email}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="input-field">
                                                            {/* <div className="dropdown">
                                                                <div className="select" >
                                                                    <span>Patient</span>
                                                                    <i className="fa fa-chevron-down" />
                                                                </div>
                                                                <input type="hidden"  />
                                                                <ul className="dropdown-menu" onClick={(e) => setData(e.target.textContent)}>
                                                                    <li id='1' >Patient</li>
                                                                    <li id='2' >Doctor</li>
                                                                    <li id='3' >Business Owner</li>
                                                                    <li id='4' >Hospital</li>
                                                                    <li id='5' >Laboratory</li>
                                                                    <li id='6' >Investor</li>
                                                                    <li id='7' > Job Seeker</li>
                                                                </ul>
                                                            </div> */}
                                                            <input list="details" id="myBrowser" placeholder='I am a' name="type" onChange={formdata}
                                                            value={inputdata.type} 
                                                                onBlur={handleBlur} />
                                                            <datalist id="details">
                                                                <option value="Patient" />
                                                                <option value="Doctor" />
                                                                <option value="Business Owner" />
                                                                <option value="Hospital" />
                                                                <option value="Laboratory" />
                                                                <option value="Investor" />
                                                                <option value="Job Seeker" />
                                                            </datalist>
                                                            <div className="error-message1">
                                                                {errors.message && touched.message && errors.message}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="input-field d-flex justify-content-center">
                                                            <input onClick={()=>{
                                                                myfunction()
                                                            }} type="submit" value="submit" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Formik>

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
                                            <a href="https://www.facebook.com/Medyseva/" target="_blank"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li>
                                            <a href="https://mobile.twitter.com/medyseva" target="_blank"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/medy.seva/?utm_medium=copy_link" target="_blank"><i className="fab fa-instagram" /></a>
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
            </section >
            <ToastContainer />

        </>
    )

}

export default ContactUs