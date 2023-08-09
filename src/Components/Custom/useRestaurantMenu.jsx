import React, {useState, useEffect} from "react";
import axios from "axios";

const useRestaurantMenu = (resId)=>{
    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        getMenu();
    },[])

    const getMenu = async()=> {
        const res = await axios.get(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}&submitAction=ENTER`);
        setResMenu(res?.data.data)
    }
    return resMenu;
}
export default useRestaurantMenu;