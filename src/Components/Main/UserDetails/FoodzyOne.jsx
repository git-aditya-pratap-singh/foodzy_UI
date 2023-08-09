import React from "react";
import app from "../../../assets/app.webp";
import play from "../../../assets/play.webp";
import foodzyone from "../../../assets/foodzyone.png";

const FoodzyOne = ()=>{
    return(
        <>
        <section className="flex flex-wrap justify-center lg:justify-between items-center gap-3 p-3 py-5 lg:py-0 lg:px-10">

            <div className="flex flex-col items-start gap-y-5">

                <h1 className="font text-xl font-bold">Foodzy One</h1>
                <p className="text-[0.9rem] sm:text-xm fonts text-gray-700">Get free delivery and extra discounts all across Foodzy.</p>
                <p className="text-[0.9rem] sm:text-xm fonts text-gray-700">Your Foodzy One benefits can be availed only on the Foodzy App.</p>

                <span className="flex gap-x-3 w-16 md:w-full">
                    <img src={app} alt="Image doesn't load..."/>
                    <img src={play} alt="Image doesn't load..."/>
                </span>

            </div>

            <div>
                <img src={foodzyone} alt="Image doesn't load..." className="w-48 sm:w-72 lg:w-96"/>
            </div>
        </section>
        </>
    )
}
export default FoodzyOne;