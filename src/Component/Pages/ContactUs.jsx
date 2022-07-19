import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactUs() {
    const [formerror,setFormError] = useState("")
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
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
        // const fullnameregexp = /^\S*$/;
        let nameregex = new RegExp("^[a-zA-Z_ ]{1,30}$")
        let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        if(!nameregex.test(inputdata.name)){
            setFormError("Please enter valid name")
        }
        else if(!inputdata.mobile || inputdata.mobile.length < 10){
            setFormError("Please enter valid phone number")
        }
        else if(!regex.test(inputdata.email)){
            setFormError("Please provide valid email")
        }
        else if(!inputdata.type){
            setFormError("Please select you role")
        }
        else{

        
        // if(inputdata.name == ""){
        //     document.getElementById("error-message1").innerHTML = "Name is required"
        // }else {
        //     document.getElementById("error-message1").innerHTML = ""
        // }
        // if(inputdata.mobile.length == 10 ){
        //     document.getElementById("error-message12").innerHTML = "Phone number is required"
        // }else {
        //     document.getElementById("error-message12").innerHTML = ""
        // }
        // if(inputdata.email == ""){
        //     document.getElementById("error-message13").innerHTML = "Email is required"
        // }else {
        //     document.getElementById("error-message13").innerHTML = ""
        // }
        // if(inputdata.type == ""){
        //     document.getElementById("error-message14").innerHTML = "Select one of them"
        // }
        // else{
        //     document.getElementById("error-message14").innerHTML = ""
        // }
      
        // console.log(inputdata.mobile.length);
        // console.log(values)
        // const payload = { ...values }
        // console.log(payload);
        const response = await axios.post('https://api.medyseva.com/api/contact_us', inputdata)
            .then((response) => {
                console.log(response);
                if(response){
                    toast.success("Data submitted successfully ")
                }
            }).catch((err) => {
                if(err){
                    toast.warn("All fields are mandatory to fill");
                }
            })
            setInputdata({
                name:"",
                email:"",
                mobile:"",
                type:""
            })
        }
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
                            // validationSchema={validationSchema}
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
                                                    <div id="error-message1" style={{color:"red",textAlign:"center"}}>
                                                        {/* {errors.name && touched.name && errors.name} */}
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="input-field">
                                                            <input type="number" name="mobile" value={inputdata.mobile} placeholder="Mobile" onChange={formdata} 
                                                                onBlur={handleBlur} />
                                                        </div>
                                                        <div id="error-message12"  style={{color:"red",textAlign:"center"}}>
                                                            {/* {errors.number && touched.number && errors.number} */}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="input-field">
                                                            <input type="email" name="email" value={inputdata.email} placeholder="Email*" onChange={formdata} 
                                                                onBlur={handleBlur} />
                                                        </div>
                                                        <div id="error-message13"  style={{color:"red",textAlign:"center"}}>
                                                            {/* {errors.email && touched.email && errors.email} */}
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
                                                            {/* <input list="details" id="myBrowser" placeholder='I am a' name="type" onChange={formdata}
                                                            value={inputdata.type} 
                                                                onBlur={handleBlur} /> */}
                                                                <select name="type" list="details" id="myBrowser" placeholder='I am a'  onChange={formdata}
                                                            value={inputdata.type} 
                                                                onBlur={handleBlur}>
                                                                     <option disabled value="" style={{display:"none"}}>I am a</option>
                                                                    <option value="Patient" >Patient</option>
                                                                    <option value="Doctor">Doctor</option>
                                                                    <option value="Business Owner">Business Owner</option>
                                                                    <option value="Hospital">Hospital</option>
                                                                    <option value="Laboratory">Laboratory</option>
                                                                    <option value="Investor">Investor</option>
                                                                    <option value="Job Seeker">Job Seeker</option>
                                                                </select>
                                                            {/* <datalist id="details">
                                                                <option value="Patient" />
                                                                <option value="Doctor" />
                                                                <option value="Business Owner" />
                                                                <option value="Hospital" />
                                                                <option value="Laboratory" />
                                                                <option value="Investor" />
                                                                <option value="Job Seeker" />
                                                            </datalist> */}
                                                            <div id="error-message14"  style={{color:"red",textAlign:"center"}}>
                                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                   <h5 style={{fontSize:"20px",color:"red",textAlign:"center"}}> {formerror}</h5>
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