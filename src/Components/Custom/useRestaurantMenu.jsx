import React, {useState, useEffect} from "react";
import axios from "axios";

const useRestaurantMenu = (resId)=>{
    const [resMenu, setResMenu] = useState(null);
    const API = `https://foodieco-backend-216f2650ef56.herokuapp.com/api/menu?resId=${resId}`

    useEffect(()=>{
        getMenu();
    },[])

    const getMenu = async()=> {
        const res = await axios.get(API);
        setResMenu(res?.data.data)
    }
    return resMenu;
}
export default useRestaurantMenu;