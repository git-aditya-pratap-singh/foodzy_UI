import React, {createContext, Suspense, lazy} from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
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

import banner from "../../assets/banner.png";
import delivery from "../../assets/delivery.png";


const Dashboard = ()=>{
    
    const data = useRestaurant();
    
        const scrollData = document.querySelector('.scrollbeta');

        const ForwardScoll = ()=>{
            scrollData.scrollLeft += 500;
        }

        const BackwardScoll = ()=>{
            scrollData.scrollLeft -= 500;
        }

    return(
        <>
        {/* Banner  */}
        <section className="w-full pt-20 relative">
            <img src={banner} alt="" className="h-40 lg:h-56 w-full object-cover"/>
        </section>

        <span className="w-2/3 flex flex-col justify-center items-start px-5 lg:px-10 absolute top-[6rem] lg:top-40 space-y-0 lg:space-y-3">
            <h1 className="font text-gray-700 text-[1.6rem] lg:text-5xl drop-shadow-lg shadow-blue-600/50" >W
            <span className="text-[#fc036f]">e</span>lc
            <span className="text-[#fc036f]">o</span>me to Food
            <span className="text-[#fc036f]">zy</span></h1>
            <p className="font text-gray-600 text-[0.7rem] lg:text-[0.8rem] drop-shadow-lg shadow-blue-600/50">After a good dinner one can forgive anybody, even one’s own relatives.</p>
        </span>

        <img src={delivery} alt="" className="object-cover w-48 lg:w-72 absolute right-0 top-24 lg:top-20"/>

         {/* End of Banner  */}


        {/* Scroll-x offer-Card */}

        <section className="w-[90%] pt-5  mx-auto flex flex-col justify-center items-start space-y-5 select-none">

        <div className="flex justify-between items-center w-full">
            <h1 className="font text-gray-700 font-bold items-start text-xl lg:text-2xl">Best Offer for you</h1>
            <span className="flex gap-x-2 justify-center items-center">

                <button className="bg-gray-200 rounded-full p-1 text-2xl shadow-lg active:scale-90 ease-in-out duration-300 " onClick={BackwardScoll}>
                    <BsArrowLeftShort/></button>
                <button className="bg-gray-200 rounded-full p-1 text-2xl shadow-lg active:scale-90 ease-in-out duration-300 scrollbt" onClick={ForwardScoll}>
                    <BsArrowRightShort /></button>

            </span>
        </div>
       
        <div className="mx-auto snap-x flex gap-x-8 snap-mandatory overflow-x-scroll scrollhide scrollbeta scroll-smooth ease-in-out duration-500">
            
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62" alt="" className="w-96 rounded-lg scroll-ml-0 snap-start flex-shrink-0 " />
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/23d24fb5e3c48229c1ad982e43283ef0" alt="" className="w-96 rounded-lg scroll-ml-0 snap-start flex-shrink-0"/>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/bacfa330da4d140c4c049d8beed9fdd6" alt="" className="w-96 rounded-lg scroll-ml-0 snap-start flex-shrink-0"/>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e" alt="" className="w-96 rounded-lg scroll-ml-0 snap-start flex-shrink-0"/>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/2cebbe4d9156bccf7b6deb3ec8e1a2b0" alt="" className="w-96 rounded-lg scroll-ml-0 snap-start flex-shrink-0 " />
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/314333c02b705b38eb73c353fa4e5830" alt="" className="w-96 rounded-lg scroll-ml-0 snap-start flex-shrink-0"/>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/c80abfc8513125a9146e8503af3bdead" alt="" className="w-96 rounded-lg scroll-ml-0 snap-start flex-shrink-0 " />
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/6aef60ecc1cd196166801870a236c6b0" alt="" className="w-96 rounded-lg scroll-ml-0 snap-start flex-shrink-0"/>
        </div>

       </section>

          {/* End of Scroll-x offer-Card */}


          
        <span className="flex flex-col justify-start gap-y-3 px-5 lg:px-20 pt-10 ">
            <h1 className="font text-xl lg:text-2xl font-extrabold ">Top Restaurant Chains in Delhi</h1>
            <h1 className="w-full h-px bg-slate-400"></h1>
        </span>

        {
            !data?.length ? (<Lazycard/>) :(

                <section className="flex flex-wrap justify-center items-center gap-5 py-8 "> 
                {
                    data?.map((item,index)=>{
                
                        return(
                            <>
                            <userContextdata.Provider value={{...item?.info}}>
    
                                <NavLink to={'/dashboard/Restaurant/Menu/' + item?.info?.id} key={item?.info?.id} {...item?.info}>
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