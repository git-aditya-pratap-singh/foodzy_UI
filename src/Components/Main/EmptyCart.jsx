import React from "react";
import cart from "../../assets/cart.jpg";
import { useNavigate } from "react-router-dom";

const EmptyCart = ()=>{
    const navigate = useNavigate();
    return(
        <>
        <section className="flex flex-col space-y-5 justify-center items-center pt-32">
           <img src={cart} alt="Image doesn't loading..." className="w-48 md:w-72"/>
           <h1 className="font">Your Cart is empty</h1>
           <p className="fonts text-gray-500">You can go to home page to view more restaurants</p>
           <button className="bg-[#fc036f] p-3 text-white font rounded text-[0.8rem] outline-none active:scale-110 duration-300"
           onClick={()=>navigate("/dashboard")}>SEE RESTAURANTS NEAR YOU</button>
        </section>
        </>
    )
}
export default EmptyCart;