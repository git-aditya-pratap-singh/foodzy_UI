import React, {useState, useEffect} from "react";
import {IMG_CDN } from "../../../Config";
import offerImg from "../../../assets/offer.png";
import  order from "../../../assets/order.jpg";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import {toast} from "react-toastify";
import { useAuth } from "../../Context/auth";
import { Rings } from "react-loader-spinner";
import { ServerAPI } from "../../../serverLink";


const FavRestaurents = ()=>{

    const [loading, setLoading] = useState(false);
    const [fav,setFav] = useState([]);
    const [auth, setAuth] = useAuth();


    const getFav = async() => {
        try {
            await axios.get(`${ServerAPI}/api/favItems/${auth?.user?.email}`)
            .then((resp)=>{  
                setFav(resp.data.response);  
            })
            .catch((err)=>{
                 console.log(err);
            })
            
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        setLoading(true);
        setTimeout(()=>{
            if(auth?.token){
                setLoading(false);
                getFav()
            }
        },2000)
        
    },[auth?.token])

    
    return(
        <>
        <section className="pr-3 py-5 lg:py-0 lg:px-5">

            <h1 className="font text-xl lg:text-2xl text-gray-700 font-semibold">Favourite Restaurents</h1>
            <h2 className="font text-[0.9rem] lg:text-xl mt-0 py-4 border-b border-zinc-300 text-gray-700">{fav?.length} Restaurants</h2>

            <section className="flex justify-center items-center">
            {loading && <span className="mt-32"><Rings
            height="80"
            width="80"
            color="#566D7E"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
            />
            </span>
            }
        
            </section>

            {fav?.length == 0 ?  <NoFav/> :
            (
                <div className="flex flex-wrap gap-8 py-5">
                    {
                    fav?.map((info,index)=>{
                        return(
                            <>
                            <NavLink to={'/dashboard/Restaurant/Menu/' + info?.favItem[0]?.id} key={info?.favItem[0]?.id}>
                                <Card {...info}/>  
                            </NavLink>
                           
                            </>
                        )
                    })
                    }
              
                </div>
            )} 
        </section>
        </>
    )
}


const Card = (props)=>{
    const DeleteFav = async(id)=>{
        try{
         
            await axios.get(`${ServerAPI}/api/deleteFavriotes/${id}`)

            .then((resp)=>{
                if(resp.data.success){
                    toast.success(resp.data.message); 
                }
                else{
                    toast.error(resp.data.message);
                }    
            })
            .catch((err)=>{
                 console.log(err);
            })
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <>
        <section className="flex flex-col gap-y-1 p-4 rounded-md border w-[20rem]/2 lg:w-[16rem] hover:shadow-md relative">

            {/* Logo Section */}
            <section className="absolute z-auto -top-2 -left-2 lg:-left-5  p-1 w-11 h-11 flex justify-center items-center bg-white rounded-full border shadow-lg">
                <img src={
                    IMG_CDN +
                    (props.favItem[0].logo === ""
                        ? 'v1669886826/Brand logo/NIC_Natural_Ice_Creams'
                        : props.favItem[0].logo
                    )
                } alt="" className="object-cover w-10"/>

            </section>     
        
            <div className="overflow-hidden rounded-md">
                <img src={
                    IMG_CDN +
                    (props.favItem[0].cloudinaryImageId === ""
                        ? "s6fhwzl0tss0vgrqvcid"
                        : props.favItem[0].cloudinaryImageId
                    )
                }   
                alt="Image doesn't load..." 
                className="w-full h-36 object-cover rounded-md hover:scale-125 duration-500"/>
            </div>
        
            <h1 className="fonts text-gray-800">{props.favItem[0].name}</h1>
            <p className="fonts text-gray-500 text-[0.7rem] mt-[-5px]">{props.favItem[0].cuisines.join(", ")}</p>


            <div className="flex justify-between items-center my-2 font-medium">
                <div className="flex items-center gap-1 px-1 text-white bg-green-500  font-semibold">
                    <h1 className="text-[0.6rem]"><FaStar/></h1>
                    <h1 className="text-[0.6rem]">{props.favItem[0].avgRatingString}</h1>
                </div>
            
                <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                <span className="fonts text-[0.7rem] text-gray-500">25 MINS</span>

                <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
                <span className="fonts text-[0.7rem] text-gray-500">{props.favItem[0].costForTwoMessage}</span>

            </div>


            <div className="flex justify-between border-t pt-4 gap-2 font-semibold items-center fonts text-[0.8rem]">
                <div className="flex justify-start items-center gap-x-2">
                    <img src={offerImg} alt="" className="h-4" />
                    <span className="text-[#a0522d]">
                        {!props.aggregatedDiscountInfoV2?.shortDescriptionList[0].meta
                        ? "40% off | Use TRYNEW"
                        : (`${props.aggregatedDiscountInfoV2?.shortDescriptionList[0].meta}`)}
                    </span>

                </div>
                <div className="text-xl p-2 rounded-full shadow-md border text-red-500 active:scale-80 ease-in-out duration-300 cursor-pointer"
                onClick={()=>DeleteFav(props._id)}><MdDelete/></div>

            </div> 
     
        </section>
        </>
    )
}


const NoFav = ()=>{
    return(
        <>
        <section className="flex flex-col justify-center items-center gap-4">
            
            <img src={order} alt="" className="object-cover w-72"/>
            <h1 className="font">No Favourite Items</h1>
            <p className="font text-gray-500 text-[0.8rem]">You haven't Favourite Items.</p>

        </section>
        </>
    )
}


export default FavRestaurents;

