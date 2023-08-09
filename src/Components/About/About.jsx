import React from "react";
import aboutData from "./Data";
import aadi from "../../assets/aadi.png";
import Footer from "../Footer/Footer";
import { FaChrome } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import {Link} from "react-router-dom";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

const About = ()=>{

    React.useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in-out',
            once:true,
            delay: 100});
    },[])

    return(
        <>
        <section className="pt-20">
        
        <div className="banner_section_about flex justify-center items-center relative">

                <div className="bg-black absolute w-full h-full opacity-50"></div> 
                <h1 className="font text-4xl text-[#fc036f] absolute">About</h1>

        </div>

        <div className=" py-5 lg:p-5 space-y-6">
           {
            aboutData.map((data,index)=>{
                return(
                    <>
                    <Card {...data} />
                    </>
                )
            })
           }
        </div>
        
        <Aboutme/>
        <Footer/>  
        </section>
        
        </>
    )
}

const Card = ({id,title,image,message})=>{
    return(
        <>
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center
         bg-gray-100 gap-y-5 text-justify rounded-lg border border-slate-200 drop-shadow py-10 px-2 lg:px-10" data-aos="fade-down" key={id}>

            <div className="basis-1/2 space-y-10 px-5">
               <h1 className="font text-3xl">Our <span className="text-[#fc036f]">{title}</span></h1>
               <p className="leading-7 text-gray-600 text-justify font-serif text-[1rem]">{message}</p>
            </div>

            <div className="basis-1/2 flex justify-center">
                <img src={image} alt="Image doesn't load..." className="w-96"/>
            </div>
            
        </div>
        </>
    )
}

const Aboutme = ()=>{
    return(
        <>
        <section className="flex flex-col justify-center items-center space-y-5 bg-gray-100 w-11/12 mx-auto py-10 px-5 rounded 
        border shadow" data-aos="zoom-in">
            <h1 className="font text-3xl text-gray-700">About me</h1>
            <img src={aadi} alt="Error!" className="w-44 object-cover rounded-full flex justify-center items-center drop-shadow-xl" data-aos="zoom-out"/>
            <h1 className="font text-xl">Aditya Pratap Singh</h1>
            <p className="text-gray-600 text-justify font-serif lg:w-1/2 text-[1rem]"> Hello! I'm Aditya Pratap Singh, a passionate MERN-Stack Web developer specializing in Reactjs, Nodejs, Expressjs & MongoDB. With a strong foundation 
            in HTML, CSS, and responsive web design, I have the skills to create visually appealing and user-friendly web applications.</p>
            <span className="font text-md">Connect with me</span>
            
            <span className="flex justify-center items-center gap-x-8 text-2xl">

               <Link to="https://www.linkedin.com/in/theaditya-pratap-singh/">
                <h1 className="text-blue-500"><BsLinkedin/></h1></Link>

               <Link to="https://github.com/git-aditya-pratap-singh"><h1 className="text-gray-700"><BsGithub/></h1></Link>

               <Link to="https://gitweb-portfolio.netlify.app/"><h1 className="text-[#8c03fcfd]"><FaChrome/></h1></Link>

               <Link to="https://www.youtube.com/@CodingHubTech"><h1 className="text-red-500"><BsYoutube/></h1></Link>
            </span>
            
        </section>
        </>
    )
}


export default About;