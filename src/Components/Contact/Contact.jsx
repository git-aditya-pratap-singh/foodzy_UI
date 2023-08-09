import React, {useRef} from "react";
import Footer from "../Footer/Footer";
import { AiTwotoneHome } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import "./Contact.css";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";


const Contact = ()=>{

    React.useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in-out',
            once:true,
            delay: 100});
    },[])

    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);

    emailjs.sendForm('service_az18ci9', 'template_vz53n4q', e.target, 'DrGpzWOEz9bCkQAc9')
        .then((result) => {
              toast.success("Your email has been Send!");
              e.target.reset();
        }, 
        (error) => {
              toast.error("Your email has been not Send!");
        });
    };


    return(
        <>
        <section className="hero_section">

            {/* Banner Section */}

            <div className="banner_section_contact flex justify-center items-center relative">

                <div className="bg-black absolute w-full h-full opacity-70"></div> 
                <h1 className="font text-4xl text-[#fc036f] absolute">Contact</h1>

            </div>

            {/* End Banner Section */}

            {/* Contact header */}

            <div className="flex flex-col md:flex-row lg:p-8" data-aos="fade-right">

                {/* Contact Information */}

                <div className="basis-1/2 p-8 space-y-6 md:space-y-10 fonts ">
                    
                    <h1 className="font text-3xl">Get in <span className="text-[#fc036f]">touch</span></h1>
                    <p>We believe that great things happen when people collaborate. 
                        Get in touch, and let's start a conversation</p>


                    <div className="flex flex-row gap-5  items-center">
                        <h1><AiTwotoneHome size={25}/></h1>
                        <div className="flex flex-col">
                           <h1>Lucknow,India</h1>
                           <p className="text-gray-500">Hazratganj, Sector-136</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-5 items-center">
                        <h1><FaPhone size={25}/></h1>
                        <div className="flex flex-col">
                           <h1>+91 5845-89624</h1>
                           <p className="text-gray-500">Sun to Sat 6am to 12pm</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-5 items-center">
                        <h1><GrMail size={25}/></h1>
                        <div className="flex flex-col">
                           <h1>foodzyfoods1k@yahoo.com</h1>
                           <p className="text-gray-500">Send us your query anytime!</p>
                        </div>
                    </div>

                </div>

                {/* End Contact Information */}


                {/* Contact Form */}

                <div className="basis-1/2 flex justify-center items-center lg:px-10 py-5" data-aos="fade-down-left">

                <div class="contactForm border border-slate-400 shadow font">
                <form  ref={form} onSubmit={sendEmail} autoComplete="off">
                    <h2>Send Message</h2>
                    <div className="inputBox">
                        <input type="text" name="user_name" required="required"/>
                        <span>Full Name</span>
                    </div>

                    <div className="inputBox">
                        <input type="email" name="user_mail" required="required"/>
                        <span>Email</span>
                    </div>

                    <div className="inputBox">
                        <textarea required="required" name="user_msg"></textarea>
                        <span>Type Your Message...</span>
                    </div>

                    <div className="inputBox">
                        <button className="bg-[#fc036f] p-2 w-28 rounded-md 
                        text-white shadow-md flex justify-center items-center gap-x-2 active:scale-90 ease-in-out duration-300">
                            <IoSend/> Send</button>
                    </div>
                </form>
                </div>
                </div>

                {/* End Contact Form */}

            </div>

            {/* End Contact Header */}


        <Footer/>
        </section>
        </>
    )
}

export default Contact;