import React, {useState, useEffect} from "react";
import axios from "axios";

// connected react to redux
import { useSelector } from "react-redux";
import { FindLocation } from "../Store/LocationSlice"; 

const useRestaurant = ()=>{
    const [resRestaurant, setresRestaurant] = useState([]);

   
    // to get the user current location / bydefault location
    const location = useSelector((store)=>store.locationStatus.findlocation);
    console.log("find",location);

    
    const API = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&page_type=DESKTOP_WEB_LISTING`;

    // here, it's food API
    
    useEffect(()=>{  
        //console.log("------------------------->jnjswjwjnwsjn");
        getRestaurant(); // Calling function
    },[])

    const getRestaurant = async()=>{
        

        const res = await axios.get(API);
         //console.log(res.data);

         setresRestaurant(res.data?.data?.cards[2]?.data?.data?.cards);
         //console.log(res.data.data.cards[2].data.data.cards);
    }
    return resRestaurant;

}

export default useRestaurant;