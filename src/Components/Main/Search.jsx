import React, {useState} from "react";
import { BsSearch } from "react-icons/bs";
import rolls from "../../assets/search/rolls.webp";
import biryani from "../../assets/search/biryani.webp";
import burger from "../../assets/search/burger.webp";
import cake from "../../assets/search/cake.webp";
import pizza from "../../assets/search/pizza.webp";
import ni from "../../assets/search/ni.webp";
import dessert from "../../assets/search/dessert.webp";
import chs from "../../assets/search/chinease.webp";

import {NavLink} from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {IMG_CDN } from "../../Config";

import useRestaurant from "../Custom/useRestaurant";



const Search = ()=>{
    const [filterResult, setFilterResult] = useState([]);
    const [searchText, setSearchText] = useState("");

    const data = useRestaurant();
   

    const FilterData = (searchText, allrestaurant)=>{
        return (allrestaurant.filter((restaurent)=>{
            return restaurent?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
        }))
    
    }

    return(
        <>
        <section className="flex flex-col space-y-4 justify-start pt-28 items-center px-2 lg:px-10 w-full bg-white h-screen">

            <span className="flex space-x-4 justify-center items-center rounded border bg-white px-5 w-full md:w-1/2">
                <input type="text" placeholder="Search for restaurents..." 
                className="fonts outline-none border-0 p-3 w-full"
                value={searchText}
                onChange={(event)=>{
                    setSearchText(event.target.value);
                    const match = FilterData(searchText, data);
                    setFilterResult(match);
                }}/>
                <span className="text-[1rem]"><BsSearch/></span>
            </span>
            
            <h1 className="font">Popular Cuisines</h1>

            <span className="flex flex-wrap space-y-1 lg:space-x-3 justify-center select-none">
                <img src={rolls} alt="" className="w-20"/>
                <img src={biryani} alt="" className="w-20"/>
                <img src={burger} alt="" className="w-20"/>
                <img src={cake} alt="" className="w-20"/>
                <img src={pizza} alt="" className="w-20"/>
                <img src={ni} alt="" className="w-20"/>
                <img src={dessert} alt="" className="w-20"/>
                <img src={chs} alt="" className="w-20"/>
            </span>

            
               { filterResult.length == 0 ? (<h1 className="text-gray-700 font text-2xl font-bold">No Result Found </h1>) :
                
                (
                <section className="border rounded-md p-2 grid grid-cols-1 lg:grid-cols-2 gap-4 content-center place-items-center">
                    {
                       filterResult.map((item,index)=>{
                        return <NavLink to={'/dashboard/Restaurant/Menu/' + item?.info?.id} key={item?.info?.id}>
                            <SearchCard {...item.info}/>
                        </NavLink>
                       })    
                    }
                    
                </section>
                )}

        </section>
        </>
    )
}





const SearchCard = ({cloudinaryImageId, name, avgRating, sla, costForTwo, cuisines})=>{
    
    return(
        <>
        <section className="p-2 lg:p-4 flex flex-row gap-x-3 justify-center items-center border rounded-md bg-slate-100 max-w-[380px]">
            <div className="overflow-hidden rounded-md">
                <img src={
                    IMG_CDN +
                    (cloudinaryImageId === ""
                        ? "s6fhwzl0tss0vgrqvcid"
                        : cloudinaryImageId
                    )
                } 
                alt="Image doesn't load..."
                 className="w-32 h-32 object-cover rounded-md hover:scale-125 duration-500"/>
            </div>
            
            <div className="flex flex-col space-y-3 text-gray-700 fonts">
                <h1>{name}</h1>

                <div className="flex justify-start items-center space-x-1 lg:space-x-2 my-2 font-medium">

                    <div className="flex items-center gap-0 lg:gap-1 px-1 text-white bg-green-500">
                        <h1 className="text-[0.7rem]"><FaStar/></h1>
                        <h1 className="text-[0.7rem]">{avgRating}</h1>
                    </div>
            
                    <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                    <span className="fonts text-[0.7rem] text-gray-500">{sla.slaString}</span>

                    <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                    <span className="fonts text-[0.7rem] text-gray-500">{costForTwo}</span>

                </div>

                <div className="flex space-x-3 justify-start items-center text-[0.7rem] text-gray-500">
                    {cuisines.join(", ")}
                </div>


            </div>
        </section>
        </>
    )
} 
export default Search;