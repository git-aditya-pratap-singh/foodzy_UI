import React from "react";
import {useNavigate} from "react-router-dom";

const PageNotFound = ()=>{
    const navigate = useNavigate();
    const url = "https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg";
    return(
        <>
        <section className="w-full h-screen p-5 bg-slate-300 flex flex-col items-center gap-5">
            <img src={url} alt="image not load..."/>
            <h1 className="font text-7xl text-gray-800">404</h1>
            <p className="font">Oops! Page Not Found</p>
            <button className="w-[200px] bg-[#fc036f] p-3 text-white font rounded text-[0.8rem] outline-none active:scale-110 duration-300"
            onClick={()=> navigate('')}>Go Back</button>
        </section>
        </>
    )
}
export default PageNotFound;