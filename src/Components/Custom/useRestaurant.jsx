import React, {useState, useEffect} from "react";
import axios from "axios";
// connected react to redux
import { useSelector } from "react-redux";
import { FindLocation } from "../Store/LocationSlice"; 

const useRestaurant = ()=>{
    const [resRestaurant, setresRestaurant] = useState([]);
    const location = useSelector((store)=>store.locationStatus.findlocation);
    //const API = `https://instafood.onrender.com/api/restaurants?lat=${location.latitude}&lng=${location.longitude}`;
    const API = 'https://foodieco-backend-216f2650ef56.herokuapp.com/api/restaurants'
    
    // here, it's food API
    //https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&page_type=DESKTOP_WEB_LISTING
    
    useEffect(()=>{  
        getRestaurant(); // Calling function
    },[])
    const getRestaurant = async()=>{
        const res = await axios.get(API);
        setresRestaurant(res.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return resRestaurant;
}
export default useRestaurant;