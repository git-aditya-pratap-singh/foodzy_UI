import React from "react";
import service1 from "../../assets/service-01.png";
import service2 from "../../assets/service-02.png";
import service3 from "../../assets/service-03.png";


const Service = ()=>{
    return(
        <>
          <section className="lg:pt-24">
            
            {/* Container-1 */}
            <div className="p-8 justify-center text-center space-y-4">
                <h2 className="text-red-500 font text-xl">What we serve</h2>


                <div className="space-y-2 font font-bold">
                <h1 className="text-3xl lg:text-4xl">Just sit back at home</h1>
                <h1 className="text-3xl lg:text-4xl">we will 
                <span className="text-red-500"> take care</span></h1>
                </div>
                
                <p className="font text-gray-500 text-[0.8rem] sm:text-[0.9rem] lg:text-[0.8rem]">When you’re hungry, 
                <span className="text-red-500"> we’ll be your best friend</span> with a bag full of warm food from our kitchen to yours.</p>
            </div>



            {/* Container-2 */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-0 lg:gap-x-24 lg:py-8 px-8 font">

                  <div className="flex flex-col gap-y-3 items-center w-80 p-4">
                    <img src={service1} alt="Image doesn't load..." className="w-24"/>
                    <h1 className="font-bold text-gray-700 text-xl">Quick Delivery</h1>
                    <p className="text-center text-[0.8rem] sm:text-[0.9rem] lg:text-[0.8rem] text-gray-500">
                        At foodzy we believe that every home is incomplete without yummy food</p>
                  </div>

                  <div className="flex flex-col gap-y-3 items-center w-80 p-4">
                    <img src={service2} alt="Image doesn't load..." className="w-24"/>
                    <h1 className="font-bold text-gray-700 text-xl">Super Dine in</h1>
                    <p className="text-center text-[0.8rem] sm:text-[0.9rem] lg:text-[0.8rem] text-gray-500">
                       We’re anything but fast food. We’re delicious, healthy meals made with fresh ingredients.</p>
                  </div>

                  <div className="flex flex-col gap-y-3 items-center w-80 p-4">
                    <img src={service3} alt="Image doesn't load..." className="w-24"/>
                    <h1 className="font-bold text-gray-700 text-xl">Easy Pick Up</h1>
                    <p className="text-center text-[0.8rem] sm:text-[0.9rem] lg:text-[0.8rem] text-gray-500">
                    we love good food and so do the thousands of people who order from us</p>
                  </div>

                 
            </div>
          </section>
        </>
    )
}

export default Service;