import React, {useEffect} from "react";
import "./Home.css";

import Serve from "./Service";
import Tasty from "./Tasty";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer";
import { FaShippingFast } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { CiBurger } from "react-icons/ci";
import {useNavigate} from 'react-router-dom';
import hero from "../../assets/hero.png";

const Home = ()=>{

    const navigate = useNavigate();
    return(
        <>
        <section className="flex flex-col md:flex-row pt-24 font" id="home">
            
           {/* Writing container*/}
            <div className="basis-1/2 px-6 lg:px-24 justify-center flex flex-col gap-y-5 lg:gap-y-8">
                <h1 className="text-xl font">Easy way to make an order</h1>
               
                <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] lg:pr-[5rem] font font-bold ">
                    <span className="text-[#df2020] ">HUNGRY? </span>
                        Just wait food at 
                    <span className="text-[#df2020]"> your door</span>
                </h2>
            
              

                <p className="text-[0.9rem] md:text-[1rem] text-gray-500 fonts font-light">You select, we deliver- fast, fresh, and instant food and Make your day 
                    fabulous with our hassle-free delivery.</p>

                <button className="bg-[#df2020] w-36 p-2 rounded-md text-white flex justify-center items-center drop-shadow-xl active:scale-90 ease-in-out duration-300"
                    onClick={()=> navigate('../login')}>
                        <CiBurger size={22} />
                            Order now
                </button>

                <div className="flex flex-row gap-x-4 lg:gap-x-8 text-[0.8rem] sm:text-[0.9rem] fonts text-gray-800">

                    <div className="flex flex-row gap-x-2 items-center">
                        <FaShippingFast size={25} className="bg-[#df2020] text-white p-1 rounded-full drop-shadow-xl"/>
                        <h1>No shipping charge</h1>
                    </div>

                    <div className="flex flex-row gap-x-2 items-center">
                        <BsShieldFillCheck size={25} className="bg-[#df2020] text-white p-1 rounded-full drop-shadow-xl"/>
                        <h1>100% secure checkout</h1>
                    </div>

                </div>
            </div>

            {/*Images container*/}
            <div className="basis-1/2 justify-center">
                <img src={hero} alt="Image doesn't loading...." className="w-[86vh] mx-auto"/>
            </div>

        </section>

        <Serve/>
        <Tasty/>
        <Testimonial/>
        <Footer/>
        
        </>
    )
}
export default Home;