import React from "react";
import {IMG_CDN } from "../../../Config";
import offerImg from "../../../assets/offer.png";
import { FaStar } from "react-icons/fa";


const FavRestaurents = ()=>{
    return(
        <>
        <section className="pr-3 py-5 lg:p-8">

            <h1 className="font text-xl lg:text-2xl text-gray-700 font-semibold">Favourite Restaurents</h1>
            <h2 className="font text-[0.9rem] lg:text-xl mt-2 lg:mt-6 py-4 border-b border-zinc-300 text-gray-700">2 Restaurants</h2>

            <div className="flex flex-wrap gap-5 py-5">
                <Card/>
            </div>
            
        </section>
        </>
    )
}


const Card = ()=>{

    return(
        <>
        <section className="flex flex-col gap-y-2 p-4 rounded-md border w-[20rem]/2 lg:w-[16rem] hover:shadow-md">
        
            <div className="overflow-hidden rounded-md">
                <img src={IMG_CDN +"s6fhwzl0tss0vgrqvcid"}   
                alt="Image doesn't load..." 
                className="w-full h-36 object-cover rounded-md hover:scale-125 duration-500"/>
            </div>
        
            <h1 className="fonts text-gray-800">Burger points</h1>
            <p className="fonts text-gray-500 text-[0.7rem] mt-[-5px]">Burgers, Snacks, Beverages</p>


            <div className="flex justify-between items-center my-2 font-medium">
                <div className="flex items-center gap-1 px-1 text-white bg-green-500  font-semibold">
                    <h1 className="text-[0.6rem]"><FaStar/></h1>
                    <h1 className="text-[0.6rem]">4.2</h1>
                </div>
            
                <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                <span className="fonts text-[0.7rem] text-gray-500">25 MINS</span>

                <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                <span className="fonts text-[0.7rem] text-gray-500">₹200 FOR TWO</span>

            </div>


            <div className="flex border-t pt-4 gap-2 font-semibold items-center fonts text-[0.8rem]">
                <img src={offerImg} alt="" className="h-4" />
                <span className="text-[#a0522d]">40% off | Use TRYNEW</span>
            </div> 

        </section>
        </>
    )
}
export default FavRestaurents;

