import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import location from "../../assets/location.png";

const Tasty = ()=>{
    return(
      <section className="flex flex-col md:flex-row md:space-x-2 w-10/12 mx-auto sm:pt-20 lg:pt-0">

        <div className="basis-1/2 flex justify-center ">
            <img src={location} alt="Image doesn't load...."className="w-[86vh] mx-auto"/>
        </div>

        <div className="basis-1/2 flex flex-col justify-start mt-[-8rem] lg:mt-0 items-start space-y-8 font">

           <h1 className="mt-28 font-bold text-3xl">Why <span className="text-red-500">Foodzy?</span></h1>

           <p className="text-gray-500 font font-thin text-[0.8rem] leading-6">Tasty food delivery is a convenient way to enjoy your favorite meals without leaving your home. 
            With a variety of options available, from gourmet to fast food, you can satisfy your cravings with just a few clicks. 
           </p>

           <div className="space-y-2">
              <span className="flex items-center space-x-2">
                <AiOutlineCheckCircle className="text-red-500"/>
                <h1 className="text-[0.8rem]">Fresh and tasty foods</h1>
              </span>
              <p className="text-[0.8rem] text-gray-500">food lovers choose their favorite foods delivered straight to them.</p>
           </div>


           <div className="space-y-2">
              <span className="flex items-center space-x-2">
                <AiOutlineCheckCircle className="text-red-500"/>
                <h1 className="text-[0.8rem]">Quality Support</h1>
              </span>
              <p className="text-[0.8rem] text-gray-500">Get the best food from the world’s top chefs.</p>
           </div>


           <div className="space-y-2">
              <span className="flex items-center space-x-2">
                <AiOutlineCheckCircle className="text-red-500"/>
                <h1 className="text-[0.8rem]">Order from any location</h1>
              </span>
              <p className="text-[0.8rem] text-gray-500">Food that always arrives hot and on time.</p>
           </div>

        </div>
      </section>
    )
}
export default Tasty;