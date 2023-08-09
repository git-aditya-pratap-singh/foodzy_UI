
import React, { useState, useEffect } from "react";
import {NavLink, Outlet} from "react-router-dom";    
import Hamburger from 'hamburger-react';     // import Hamburger menu

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

/* Import Icon */
import { FaHome,FaUserAlt,FaHockeyPuck,FaHamburger } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg"; 
import { GiSkills } from "react-icons/gi";
import { FaPhoneAlt, FaUserGraduate, FaProjectDiagram  } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import { RxDoubleArrowUp } from "react-icons/rx";

/* Import Logo and CSS file */
import logo from "../../assets/logo.png";
import "./nav.css";

const Navbar = () =>{

    // ################### Navbar #####################
    const [toggle, setToggle] = useState(false); // display which navigation bar (Mobile || Laptop)
    const [Nav, setNav] = useState(false);  // For Change Navigation Color

    const changeBack = () =>{
        if(window.scrollY >= 30){
            setNav(true);  // Update a Nav value
        }
        else{
            setNav(false);  // Update a Nav value
        }
    }
    window.addEventListener('scroll',changeBack);
    // ################### Navbar #####################



    // ################### Scroll Button #####################
    const [toggle_top, setToggleTop] = useState(false); // display scrolltop Button

    const scrollTo = () =>{
        if(window.scrollY >= 800){
            setToggleTop(true);
        }
        else{
            setToggleTop(false);
        }
    }
    const ScrollTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    window.addEventListener('scroll',scrollTo);
    // #########################################################


    useEffect(()=>{
        Aos.init({offset: 100,
            duration: 600,
            easing: 'ease-in',
            once:true,
            delay: 100});
    },[])
    
    return(
        <>
        {/* main section */}
        <div className={`w-full px-4 sm:px-8 py-3 fixed z-10 ${Nav ? 'bg-gray-100' : ''}`}>
           
           {/* main-2 section into main section */}
           <div className="flex flex-row justify-between items-center">
           
            {/* Logo section */}
            <div className="text-2xl font-bold text-gray-900 flex items-center gap-3 lg:ml-16">
                    <img src={logo} alt="Error" className="w-[50px] md:w-[50px]"/>
                    <h1 className="font">food<span className="text-[#fc036f]">zy</span></h1>
            </div>


            
            {/* Navgation Item section */}
            <div className="px-5 fine">

                <ul className="hidden lg:flex flex-row items-center text-gray-900 font-semibold gap-12">

                    <li className="ease-in duration-300 break-before-column cursor-pointer relative">
                        <NavLink to="/" activeClass="active" className="flex flex-row items-center gap-2"><FaHome/>Home</NavLink>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <NavLink to="/about" className="flex flex-row items-center gap-2"><FaUserAlt/>About</NavLink>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <NavLink to="/offers" className="flex flex-row items-center gap-2"><FaHamburger/>Offer's</NavLink>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <NavLink to="/contact" className="flex flex-row items-center gap-2"><FaPhoneAlt/>Contact</NavLink>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <NavLink to="/login" className="flex flex-row items-center gap-2"><CgLogIn/>Sign-in</NavLink>
                    </li>
                </ul>

            </div>
            {/* End Navgation Item section */}



            
            {/* Hamburger Menu */}
            <div className="lg:hidden  border border-slate-400 shadow-md rounded-md">
                <a onClick={() => setToggle(!toggle)}><Hamburger color="#323035" size={25} duration={0.5} easing="ease-in" rounded 
                    toggled={toggle} toggle={!toggle}/></a>
            </div>
            {/* End Hamburger Menu */}





            {/* Mobile Navigation Menu */}
            <div className={`w-[210px] bg-gray-100 lg:hidden absolute py-10 shadow-lg rounded-lg
            transition-all-duration-500 ease-in-out duration-300 fine top-20
            ${toggle? 'right-0':'right-[-80%]'}
            `}>
            <ul className="flex flex-col text-gray-900 font-semibold gap-8 items-center ">

                    <li className=" ease-in duration-300 break-before-column cursor-pointer relative">
                        <NavLink to="/" onClick={() => setToggle(!toggle)} className="flex flex-row items-center gap-2"><FaHome/>Home</NavLink>
                    </li>

                    <li className=" ease-in duration-300 cursor-pointer relative">
                        <NavLink to="/about" onClick={() => setToggle(!toggle)} className="flex flex-row items-center gap-2"><FaUserAlt/>About</NavLink>
                    </li>

                    <li className=" ease-in duration-300 cursor-pointer relative">
                        <NavLink to="/offers" onClick={() => setToggle(!toggle)} className="flex flex-row items-center gap-2"><GiSkills/>Offer's</NavLink>
                    </li>

                    <li className=" ease-in duration-300 cursor-pointer relative">
                        <NavLink to="/contact" onClick={() => setToggle(!toggle)} className="flex flex-row items-center gap-2"><FaUserGraduate/>Contact</NavLink>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <NavLink to="/login" onClick={() => setToggle(!toggle)} className="flex flex-row items-center gap-2"><CgLogIn/>Sign-in</NavLink>
                    </li>


                    
            </ul>
            </div>
            {/* Mobile Navigation Menu */}

           </div>
           {/* End main-2 section into main section */}
        </div>
         
        <Outlet/>



        {/* Scroll from bottom to top design */}

        { toggle_top == true && 
        <div className="bg-gray-700 p-3 rounded-full shadow-lg shadow-gray-500/70 z-10 top-[90%] left-[83%] md:left-[95%] fixed" data-aos="zoom-in-out"
            onClick={ScrollTop}>
            <RxDoubleArrowUp className="text-white text-2xl"/>
        </div>
        }

        
        </>
    )
}
export default Navbar;