import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { SlHeart } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { IMG_CDN } from "../../Config";

// import Custom Components
import useRestaurantMenu from "../Custom/useRestaurantMenu";

// import LazyLoading Items
import Lazymenu from "../LazyItem/Lazymenu";

import offerImg from "../../assets/offer.png";
import fssai from "../../assets/fssai.jpg";
import nonveg from "../../assets/nonveg.png";
import Footer from "../Footer/Footer";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/CartSlice";
import { toast } from 'react-toastify';
import axios from "axios";
import { useAuth } from "../Context/auth";
import {ServerAPI} from '../../serverLink';


const MenuRestaurant = ()=>{

    const [auth,setAuth ]= useAuth();  
  
    const resId = useParams();  // resId = {id:15558}
    const { id } = resId;
    const resMenu = useRestaurantMenu(id);  // call custom components

    {/* Favoriate restaurents logic */}
    const SendFav = (favData)=>{
       console.log(favData);

       axios.post(`${ServerAPI}/api/favRestaurent/${auth.user.email}`, {favData})
       .then((response)=>{
        if(response.data.success){
           toast.success(response.data.message);
        }
        else{
          toast.error(response.data.message);
        }
       })
       .catch((err)=>{
        console.log(err);
       })
      
    }



    const scrollData = document.querySelector('.scrollbeta');

        const ForwardScoll = ()=>{
            scrollData.scrollLeft += 200;
        }

        const BackwardScoll = ()=>{
            scrollData.scrollLeft -= 200;
        }



    
    return !resMenu ? (<Lazymenu/>) :(
        <>
        <section className="flex flex-col justify-start space-y-3 m-auto w-full sm:w-[70%] p-6 pt-28 overflow-hidden">
          
          {/* Address_Path and heart, search icon Section */}
          <span className="flex justify-between items-center">

            <h1 className="fonts text-[0.7rem] text-gray-500">
              Home / {resMenu?.cards[0]?.card?.card?.info?.city} / {resMenu?.cards[0]?.card?.card?.info?.name}
            </h1>

            <span className="flex justify-center items-center space-x-6 text-xl">
              <SlHeart className="text-[1rem]" onClick={()=>SendFav(resMenu?.cards[0]?.card?.card?.info)}/>
              <BiSearch />
            </span>
            
          </span>
          {/* End of Address_Path and heart, search icon Column-1 */}



            {/* Restaurant name, distance and Rating section*/}
            <div className="flex flex-row justify-between items-center">
                
                {/* Restaurant name and distance */}
                <div className="flex flex-col space-y-1">
                    <h1 className="font text-2xl">{resMenu.cards[0].card.card.info.name}</h1>
                    <h2 className="fonts text-[0.8rem] text-gray-600">{resMenu?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
                    <h2 className="fonts text-[0.8rem] text-gray-600">{resMenu.cards[0].card.card.info.areaName} {", "}
                      {resMenu?.cards[0]?.card?.card?.info?.city}{" "}</h2>
                </div>
                {/* End Restaurant name and distance */}


                {/* Restaurant rating */}
                <div className="flex flex-col justify-center items-center border rounded-md p-2 space-y-2">

                    <span className="flex items-center space-x-1">
                      <h1 className="text-[0.8rem] text-green-500"><FaStar/></h1>
                      <h1 className="font text-[0.7rem] font-extrabold">{resMenu.cards[0].card.card.info.avgRatingString}</h1>
                    </span>

                    <h1 className="w-full h-[0.1rem] bg-gray-200"></h1> 

                    <span className="flex items-center">
                      <h1 className="font text-[0.6rem] text-gray-600">{resMenu.cards[0].card.card.info.totalRatingsString}</h1>
                    </span>

                </div>
                {/* End of Restaurant rating */}

            </div>
            {/* End of Restaurant name, distance and Rating section*/}


            <h1 className="w-full h-[0.1rem] bg-gray-200"></h1>


            {/* Distance and price section */}
            <div className="flex gap-8 items-center pt-3">

            <div className="flex items-center gap-2 font-semibold">
              <svg
                className="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                strokeWidth="1.3"
              ></circle>
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              ></path>
              </svg>
              <span className="font text-[0.8rem]">26 MINS</span>
            </div>

            <div className="flex items-center gap-2 font-semibold">
              
              <svg
                className="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                stroke="#3E4152"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              ></path>
              </svg>
              <span className="font text-[0.8rem]">{resMenu?.cards[0]?.card?.card?.info?.costForTwoMessage}</span>
            </div>

            </div>

          {/* End of Distance and price section */}


          {/* Offers Section */}

          <div className="flex justify-end items-center w-full">
            
            <span className="flex justify-between items-center w-full -mb-2">

                <button className="bg-gray-200 rounded-full p-1 text-2xl shadow-lg active:scale-90 ease-in-out duration-300" onClick={BackwardScoll}>
                    <BsArrowLeftShort/></button>
                <button className="bg-gray-200 rounded-full p-1 text-2xl shadow-lg active:scale-90 ease-in-out duration-300 scrollbt" onClick={ForwardScoll}>
                    <BsArrowRightShort/></button>

            </span>
        </div>

          <div className="snap-x flex gap-x-8 snap-mandatory mx-auto overflow-x-scroll w-full 
          flex-shrink-0 scroll scroll-smooth scrollhide scrollbeta py-3">
          {
              (resMenu.cards[1].card.card.gridElements.infoWithStyle.offers).map((item,index)=>{
                return(
                  <>
                    <PriceCard
                      header = {item?.info?.header}
                      couponCode = {item?.info?.couponCode}
                      description = {item?.info?.description}
                      offerTag = {item?.info?.offerType}
                    />                
                  </>
                )
              })
             }

          </div>

           {/* End of Offers Section */}


          <h1 className="w-full h-[0.1rem] bg-gray-200"></h1>


          {/* Recommended Section */}
          <span className="font font-bold mt-4 mb-10 text-gray-700">Recommended (
            {
              resMenu?.cards[resMenu?.cards.length -1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
              ?.card?.itemCards?.length
            })
          </span>
          {/* End of Recommended Section */}


          {/* Foods Item Section */}
          <div className="flex flex-col items-center space-y-5 pb-20">
            {
              (resMenu?.cards[resMenu?.cards.length -1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
              .map((item,index)=>{
                //console.log(item?.card?.info);
                return(
                  <>
                    <ItemCard 
                    id = {item?.card?.info?.id}
                    name = {item?.card?.info?.name}
                    price = {(item?.card?.info?.price) ? Math.floor(item?.card?.info?.price / 100) : 150}
                    ribbon = {item?.card?.info?.ribbon?.text}
                    description = {item?.card?.info?.description}
                    imageId = {item?.card?.info?.imageId}
                    itemAttribute = {item?.card?.info?.itemAttribute?.vegClassifier}
                    restaurantName = {resMenu?.cards[0]?.card?.card?.info.name}
                    restaurantAddress = {resMenu?.cards[0]?.card?.card?.info.areaName}
                    restaurantImage ={resMenu?.cards[0]?.card?.card?.info?.cloudinaryImageId}
                    payment = {(item?.card?.info?.price) ? Math.floor(item?.card?.info?.price / 100) : 150}
                    />
                  </>
                )
              })
         
            } 
          </div>
          {/* End of Foods Item Section */}
          
        </section>
        <Footer/>
        </>
    )
}


// Offers_Card
const PriceCard = (props)=>{
  return(
    <>
    <div className="snap-start flex-shrink-0 space-x-8 flex items-center justify-center">
      <div className="flex flex-row items-center p-3 border rounded-md shadow-md w-[220px]">
        {/* Offertags */}
        <div className="-rotate-90 py-2 border-b">
          <h1 className="fonts text-[0.6rem] text-red-500">
          {!props.offerType ? "WELCOME" : props.offerType }
          </h1>
        </div>

        {/* Offer_header */}
        <div className="flex flex-col justify-start items-center space-y-2">
          <span className="flex items-center space-x-2">
            <img src={offerImg} alt="Image doesn't load..." className="h-4"/>
            <h1 className="font text-[0.6rem] font-extrabold">{props.header}</h1>
          </span>
        
          {/* CouponCode */}
          <span className="flex items-center space-x-2">
            <h1 className="font text-[0.5rem] font-extrabold text-gray-600">{`${props.couponCode} | ${props.description}`}</h1>
          </span>
        </div>
        {/* End of Offer_header */}

      </div>   
      </div>  
    </>
  )
}


// Foods_Item_Card
const ItemCard = (props)=>{

  //its a no of item(bydefault = 1)
  const count = 1;
 
  const dispatch = useDispatch();

  function addItemFunc(item) {  // item = {...props, count}
    
    dispatch(addItem(item));
    toast.success('Added Successfully!');
  }
  
  return(
    <>
    <div className="flex flex-row justify-between items-center border-b pb-6 mb-4 gap-0 w-full pt-6" key={props.id}>
      {/* flex section-1 */}
      <div className="basis-1/2 flex flex-col items-start space-y-1">
        <span className="py-1 flex items-center space-x-2">
          {
            props.itemAttribute === "VEG" ? (<img src={fssai} alt='' className="w-4 "/>):
            (<img src={nonveg} alt='' className="w-5 "/>)
          }
          
          {
            !props.ribbon ? "" : (
              <div className="flex items-center space-x-1">
                <h1 className="text-[0.8rem] text-yellow-500"><FaStar/></h1>
                <h2 className="text-yellow-500 fonts text-[0.8rem]">{props.ribbon}</h2>
              </div>
            )
          }
        </span>

        <h1 className="fonts text-gray-700">{props.name}</h1>
        <p className="fonts text-gray-700">₹ {props.price}</p>
        <h2 className="text-[0.8rem] text-gray-400">{props.description}</h2> 
      </div>


      {/* flex section-2 */}
      <div className="flex flex-col gap-1 relative">
        <img src={
           props.imageId
           ? IMG_CDN + props.imageId
           : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
        } 
        alt="Image doesn't load..." className="w-36 h-24 rounded self-center object-cover"/>
        <button className="absolute bottom-[-10px] bg-white shadow-md border self-center text-[13px] px-8 py-2 
        rounded text-green-500 fonts active:scale-90 transition-all duration-200 ease-in-out outline-none"

        onClick={() => addItemFunc({...props, count})}
        >
        ADD</button>
        
      </div>

    </div>    
    </>
  )
}


export default MenuRestaurant;