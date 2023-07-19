import React, {createContext, Suspense, lazy} from "react";
import { NavLink } from "react-router-dom";
//import Header from "./Header";
import Footer from "../Footer/Footer";

import Lazycard from "../LazyItem/Lazycard";

// import Custom Hooks
import useRestaurant from "../Custom/useRestaurant";

// here, userContextdata is a Variable name and used for passing the data from one to another components.
const userContextdata = createContext();

// Lazy loading apply for Itemcard
import CardRestaurant from "./CardRestaurant";

//const CardRestaurant = lazy(()=> import("./CardRestaurant"));


const Dashboard = ()=>{
    
    const data = useRestaurant();
    
    return(
        <>
          
        <span className="flex flex-col justify-start gap-y-3 px-10 lg:px-20 pt-28 ">
            <h1 className="font text-2xl font-extrabold ">Restaurants ({data.length})</h1>
            <h1 className="w-full h-px bg-slate-400"></h1>
        </span>

        {
            !data.length ? (<Lazycard/>) :(

                <section className="flex flex-wrap justify-center items-center gap-5 py-10 "> 
                {
                    data.map((item,index)=>{
                        //const items = item.data;
                        return(
                            <>
                            <userContextdata.Provider value={{...item.data}}>
    
                                <NavLink to={'/dashboard/Restaurant/Menu/' + item.data.id} key={item?.data?.id} {...item.data}>
                                    <CardRestaurant />
                                </NavLink>
    
                            </userContextdata.Provider>
                            </>
                        )
                    })
                }   
            </section>
    
            )
        }
        
        <Footer/>
        </>
    )
}
export default Dashboard;
export {userContextdata};