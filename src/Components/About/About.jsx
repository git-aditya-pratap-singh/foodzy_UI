import React from "react";
import aboutData from "./Data";

import Footer from "../Footer/Footer";

const About = ()=>{
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
                    <Card {...data}/>
                    </>
                )
            })
           }
        </div>
        
        
        <Footer/>  
        </section>
        
        </>
    )
}

const Card = ({id,title,image,message})=>{
    return(
        <>
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center
         bg-gray-100 gap-y-5 text-justify rounded-lg border border-slate-200 drop-shadow py-10 px-2 lg:px-10" key={id}>

            <div className="basis-1/2 space-y-10 px-5">
               <h1 className="font text-3xl">Our <span className="text-[#fc036f]">{title}</span></h1>
               <p className="fonts leading-7 text-gray-500">{message}</p>
            </div>

            <div className="basis-1/2 flex justify-center">
                <img src={image} alt="Image doesn't load..." className="w-96"/>
            </div>
            
        </div>
        </>
    )
}
export default About;