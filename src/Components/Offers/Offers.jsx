import React, {createContext} from "react";
import axios from "axios";
import Footer from "../Footer/Footer";

// Lazy loading components
import Lazycard from "../LazyItem/Lazycard";
import Itemcard from "./Itemcard";
import useRestaurant from "../Custom/useRestaurant";

// here, userContext is a Variable name and used for passing the data from one to another components.
const userContext = createContext();

const Offers = ()=>{
   
    const restaurant = useRestaurant();
    
    return(
        <>
        <section className="hero_section">
            {/* Banner Section */}

            <div className="banner_section_contact flex justify-center items-center relative ">

                <div className="bg-black absolute w-full h-full opacity-50"></div> 
                <h1 className="font text-4xl text-[#fc036f] absolute top-9">Offers for you</h1>
                <p className="font text-[0.7rem] md:text-[0.8rem] text-[#fc036f] absolute bottom-9">Explore top deals and offers exclusively for you!</p>

            </div>

            {/* End Banner Section */}

            {
                !restaurant?.length ? (<Lazycard/>) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 p-10">

                    {
                    restaurant.map((data,index)=>{
                        const items = data?.info;
                        return(
                            <>
                                <userContext.Provider value={{...items}}>
                                    <Itemcard />
                                </userContext.Provider>
                            </>
                        )
                    })
                    }    
                    </div>

                )
            }

            
            <Footer/>
        </section>
        </>
    )
}
export default Offers;
export {userContext};