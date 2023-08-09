import React, {useState} from "react";
import login from "../../assets/signup.png";
import { GrMail } from "react-icons/gr";
import { FaUser,FaFingerprint } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { ServerAPI } from "../../serverLink";
import { toast } from 'react-toastify';

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

const Signup = ()=>{

    React.useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in-out',
            once:true,
            delay: 100});
    },[])
    

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        // Form validation logic
        const validateForm = () => {
            const errors = {};

            // Validate name field
            if (!formData.name.match(/^[a-zA-Z\s]{3,50}$/)) {
                errors.name = 'A name must be contain only characters & length must be atleast 3 characters!"';
            }

            // Validate email field
            if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                errors.email = 'Invalid email address';
            }

            // Validate phoneno field
            if (!formData.phone.match(/^\d{10}$/)) {
                errors.phone = 'Phone number must be a 10-digit number';
            }

            // Validate password field
            if (!formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
                errors.password = 'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, and one digit';
            }

        return errors;
        };


        // Perform form validation
        const validationErrors = validateForm();

        // If there are validation errors, set the error state
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } 

        else {
            // Form is valid, submit the data or perform further actions
            setErrors(validationErrors);
            //event.target.reset();
            
            // Data send from client to server
            axios.post(`${ServerAPI}/api/signup`, formData)
            .then((response)=> {
                if(response.data.success){
                    toast.success(`${response.data.message}`);
                    // redirect to login page-----
                    navigate('../login');
                }
                else{
                    toast.error(`${response.data.message}`);
                }

            })
            .catch((err)=>{
                console.log(err);
            });   
        } 
    }

    return(
        <>
        <section className="flex flex-col lg:flex-row gap-y-18 lg:h-screen bg-white overflow-x-hidden">

            <div className="basis-1/2 flex justify-center items-center h-full w-full relative" data-aos="fade-right">
                <div className="clip h-full w-full absolute"></div>

               <img src={login} alt="image doesn't load..." className="w-72 sm:w-[500px] z-10"/>
            </div>
           
            <div className="basis-1/2 flex justify-center items-center bg-white py-8" data-aos="fade-left">

                <div className="w-80 lg:w-96 p-2 flex flex-col space-y-10 ">

                    <h1 className="font text-3xl font-extrabold">Sign<span className="text-[#fc036f]">up</span></h1>
                    <p className="font text-gray-500 text-[0.8rem]">Order your favorite food with ease and convenience through our user-friendly app. Enjoy delicious meals delivered to your door.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-8" autoComplete="off">

                        <div className="flex flex-row gap-x-2 justify-start items-center bg-white px-3 
                        fonts border-b-2">
                            <p><FaUser color="#fc036f"/></p>
                            <input type="text" name="name" placeholder="Enter Your Name" 
                            className="w-full p-2 outline-none"
                            value={formData.name}
                            onChange={handleChange}
                            required/>
                        </div>

                        {errors.name && <span className="error">{errors.name}</span>}


                        <div className="flex flex-row gap-x-2 justify-start items-center bg-white px-3 
                        fonts border-b-2">
                            <p><GrMail color="#fc036f"/></p>
                            <input type="email" name="email" placeholder="Enter Your Email" 
                            className="w-full p-2 outline-none"
                            value={formData.email}
                            onChange={handleChange}
                            required/>
                        </div>

                        {errors.email && <span className="error">{errors.email}</span>}


                        <div className="flex flex-row gap-x-2 justify-start items-center bg-white px-3 
                        fonts border-b-2">
                            <p><BsFillTelephoneFill color="#fc036f"/></p>
                            <input type="phoneno" name="phone" placeholder="Enter Your Phone no." 
                            className="w-full p-2 outline-none"
                            value={formData.phone}
                            onChange={handleChange}
                            required/>
                        </div>

                        {errors.phone && <span className="error">{errors.phone}</span>} 


                        <div className="flex flex-row gap-x-2 justify-center items-center bg-white px-3 
                        fonts border-b-2">
                            <p><FaFingerprint color="#fc036f"/></p>
                            <input type="password" name="password" placeholder="Create Password" 
                            className="w-full p-2 outline-none"
                            value={formData.password}
                            onChange={handleChange}
                            required/>
                        </div>
                        
                        {errors.password && <span className="error">{errors.password}</span>} 
                        
                       <button className="p-2 w-full outline-none fonts text-white bg-red-400 rounded-md shadow-sm
                       active:scale-95 ease-in-out duration-300">SIGNUP</button>
                    </form>  
                </div>
            </div>
        </section>
        </>
    )
}
export default Signup;