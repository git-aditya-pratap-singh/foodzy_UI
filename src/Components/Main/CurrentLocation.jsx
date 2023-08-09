import React, {useState, useEffect} from "react";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaTimes,FaHome } from "react-icons/fa";
import dt from "../../assets/dt.png";

// connected react to redux
import { useDispatch } from "react-redux";
import { FindLocation } from "../Store/LocationSlice";
import { useAuth } from "../Context/auth";


const CurrentLocation = ()=>{

    const [auth, setAuth] = useAuth();

    const [location, setLocation] = useState(null);

    const dispatch = useDispatch();

    navigator.geolocation.getCurrentPosition((position)=>{
        
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        
    })

    return(
        <>
        <section className="max-w-[400px] h-screen bg-white p-8 py-10 flex flex-col justify-start items-end space-y-4 rounded-md borderA"> 
            
           <input type="search" placeholder="Search for area, street name.." className="w-full rounded border p-2 px-4 outline-none"/>
           
           {/* Get Current Location */}
            <div className="flex space-x-2 items-start p-2 rounded border w-full cursor-pointer">
                <span className="text-[1.5rem] p-3"><MdOutlineMyLocation/></span>
                <span className="flex flex-col items-start" onClick={()=>dispatch(FindLocation(location))}>
                    <h1 className="fonts">Get current location</h1>
                    <p className="fonts text-[0.8rem] text-gray-500">Using GPS</p>
                </span>
            </div>

           {/* Saved Address */}
            <div className="flex flex-row space-x-5 p-2 rounded border items-center w-full">
                <span className="text-[1.3rem] p-3"><FaHome/></span>
                <span className="flex flex-col space-y-4 py-3">
                    <h5 className="text-gray-500 text-[0.8rem]">SAVED ADDRESS</h5>
                    <h1 className="fonts">Home</h1>
                    <p className=" text-[0.8rem] text-gray-600">

                    {(auth.user.address && auth.user.flatno && auth.user.landmark)  ? `${auth.user.address+","+auth.user.flatno+","+auth.user.landmark}`
                    : "Gurunanak Nagar Alambagh 564/074, Muslim Nagar, Alambagh, Lucknow, Uttar Pradesh 226005, india"}
                    
                    </p>
                </span> 
            </div>

            <img src={dt} alt=""/>
            

        </section>
        </>
    )
}
export default CurrentLocation;