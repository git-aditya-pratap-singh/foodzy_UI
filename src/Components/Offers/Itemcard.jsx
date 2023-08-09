import React, {useContext} from "react";

// import userContext variable name;
import { userContext } from "./Offers";
import {IMG_CDN } from "../../Config";
import { FaStar } from "react-icons/fa";
import offerImg from "../../assets/offer.png";

const Itemcard =()=>{
    // here, store a data into userContext from provides/transfer data to props variable.
    const props = useContext(userContext);

    return(
        <>
        <section className="flex flex-col gap-y-2 p-4 rounded-md border w-[20rem] sm:w-[16rem] hover:shadow-md" key={props.id}>
        
            <div className="overflow-hidden rounded-md">
                
                <img src={
                    IMG_CDN +
                    (props.cloudinaryImageId === ""
                        ? "s6fhwzl0tss0vgrqvcid"
                        : props.cloudinaryImageId
                    )
                }   
                alt="Image doesn't load..." className="w-full h-36 object-cover rounded-md hover:scale-125 duration-500"/>
            </div>
            
            <h1 className="fonts text-gray-800">{props.name}</h1>
            <p className="fonts text-gray-500 text-[0.7rem] mt-[-5px]">{props.cuisines.join(", ")}</p>


            <div className="flex justify-between items-center my-2 font-medium">
                <div className="flex items-center gap-1 px-1 text-white bg-green-500  font-semibold">
                    <h1 className="text-[0.6rem]"><FaStar/></h1>
                    <h1 className="text-[0.6rem]">{props.avgRating === '--' ? "4.2" : props.avgRating}</h1>
                </div>
                
                <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                <span className="fonts text-[0.7rem] text-gray-500">{props.sla.slaString}</span>

                <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                <span className="fonts text-[0.7rem] text-gray-500">{props.costForTwo}</span>

            </div>

            <div className="flex border-t pt-4 gap-2 font-semibold items-center fonts text-[0.8rem]">
                    <img src={offerImg} alt="" className="h-4" />
                    <span className="text-[#a0522d]">
                    {!props.aggregatedDiscountInfoV3?.header
                    ? "40% off | Use TRYNEW"
                    : (`${props.aggregatedDiscountInfoV3?.header+" | " +props.aggregatedDiscountInfoV3?.subHeader}`)}
                    </span>
            </div> 


        </section>
        </>
    )
}
export default Itemcard;