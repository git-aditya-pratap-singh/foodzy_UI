import React, {useState} from "react";
import { FaHome } from "react-icons/fa";

// change (Edit) Addrsss components
import ChangeAddress from "../ChangeAddress";
import { useSelector, useDispatch } from "react-redux";
import { CheckState } from "../../Store/StateSlice";
import {useAuth} from "../../Context/auth";

const Address = ()=>{
   
    const dispatch = useDispatch();
    const [auth, setAuth] = useAuth();
    
    // Change (Edit) Address State fetch
    const toggle = useSelector((store)=>store.status.data);
    
    return(
        <>
        {/* Change(Edit) Address Section */}
        <section className={`fixed z-10 top-20 ease-in-out duration-500 ${toggle ? 'left-0' : '-left-[500px]'} `}>
           <ChangeAddress value={toggle}/>
        </section>


        {/* Address Section */}
        <section className="flex flex-col justify-center items-start gap-5 py-5 pr-3 lg:p-8">
        <h1 className="font text-xl font-semibold text-gray-700">Manage Addresses</h1>
        
        {/* Saved Address Container */}

        <div className="flex flex-row justify-center space-x-2 p-2 lg:p-3 rounded-md border shadow items-center lg:w-1/3">

            <span className="text-[1.3rem] mx-3 text-[#fc036f]"><FaHome/></span>

            <span className="flex flex-col space-y-2 py-3">

                <h5 className="text-gray-500 text-[0.8rem]">SAVED ADDRESS</h5>
                <h1 className="fonts">Home</h1>
                <p className=" text-[0.8rem] text-gray-600">{(auth.user.address && auth.user.flatno && auth.user.landmark)  ? `${auth.user.address+","+auth.user.flatno+","+auth.user.landmark}`
                : "Gurunanak Nagar Alambagh 564/074, Muslim Nagar, Alambagh, Lucknow, Uttar Pradesh 226005, india"}</p>

                <div className="flex space-x-6 fonts text-[#fc036f] select-none">

                    <span className="hover:text-gray-700 cursor-pointer" 
                    onClick={
                        ()=>dispatch(CheckState(true))  // change (edit) address state update
                    }>
                    EDIT</span>  
                </div>

            </span> 

        </div>
         
        </section>
        </>
    )
} 
export default Address;