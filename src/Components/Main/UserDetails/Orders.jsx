import React, {useState, useEffect} from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from 'react-toastify';
import order from "../../../assets/food.jpg";
import {IMG_CDN } from "../../../Config";
import { Rings } from "react-loader-spinner";
import axios from 'axios';
import { MdDelete } from "react-icons/md";

import { useAuth } from "../../Context/auth";

import { ServerAPI } from "../../../serverLink";

const Orders = ()=>{

    const [orders,setOrders] = useState({});

    const [loading, setLoading] = useState(false);

    const [auth, setAuth] = useAuth();
   
    // get orders -----------------------------------
    const getOrders = async() => {
        try {
            await axios.get(`${ServerAPI}/api/orders/${auth?.user?.email}`)
            .then((resp)=>{
                setOrders(resp.data); 
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
                getOrders()
            }
        },2000)
        
    },[auth?.token])
    

    return(
        <>
        <section className="flex justify-center items-center">
            {loading && <span className="mt-44 lg:mt-48"><Rings
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
        
       {
        orders?.response?.length == 0 ? <NoOrders/> :
       
        (<section className="pr-3 py-5 lg:py-0 flex flex-wrap gap-3">
            {
                orders?.response?.map((info, index)=>{
                    return(
                        <>
                        <OrderComponents {...info}/>
                        </>
                    )
                })
            }
        </section>)

        }
        </>
    )
}
export default Orders;



const OrderComponents = (props)=>{
    
    const [orderSta, setOrdersta] = useState("Ordered");

    setTimeout(()=>{
       setOrdersta("Delivered");
    },5000);


     // delete order -------------------------------------------------
     const deleteOrder = async(id) => {
        try{
            await axios.get(`${ServerAPI}/api/deleteOrders/${id}`)
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
        <section className="flex flex-col gap-y-2 p-4 rounded-md border w-[20rem]/2 lg:w-[18rem] hover:shadow-md">

            <div className="flex flex-row justify-between items-center gap-x-2 border-b pb-5">

                <img src={
                    IMG_CDN +
                    (props.ordersItem[0].restaurantImage === ""
                        ? "s6fhwzl0tss0vgrqvcid"
                        : props.ordersItem[0].restaurantImage
                    )
                } alt="Image doesn't load..." className="object-cover w-32 rounded"/>
                <span className="flex flex-col gap-y-2 justify-center items-start">
                    <h1 className="text-gray-700 font text-[0.8rem] font-semibold">{props.ordersItem[0].restaurantName}</h1>
                    <p className="text-gray-600 fonts text-[0.7rem]">{props.ordersItem[0].restaurantAddress}</p>
                </span>

            </div>

            <div className="flex flex-col space-y-2">
                <h1 className="fonts text-[0.8rem] text-gray-600">ORDER-ID : {props.orderID}</h1>
                <h1 className="fonts text-[0.8rem] text-gray-600">PAYMENT-ID : {props.paymentID}</h1>
            </div>

            <table className="table-fixed ">

                <thead className="bg-gray-200 fonts rounded text-[0.8rem]">
                    <tr>
                        <th className="">Item</th>
                        <th className="">Qut..</th>
                        <th className="">Price</th>
                    </tr>
                </thead>

                <tbody className="fonts text-[0.8rem] text-gray-600 ">
                    {
                        props?.ordersItem.map((item, index)=>{
                            return(
                                <>
                                <tr className="border-b">
                                    <td className="">{item.name}</td>
                                    <td className="">{item.count}</td>
                                    <td className="">₹{item.price}/1</td>
                                </tr>
                                </>
                            )
                        })
                    }      
                </tbody>

            </table>

            <h1 className="fonts text-gray-600 text-[0.8rem] font-bold border-b p-1">Total Pay : ₹{props.payments}</h1>

            
            <span className="flex justify-between items-center gap-x-2">

                <div className="text-xl text-[#fc036f] active:scale-90 ease-in-out duration-300 cursor-pointer" 
                onClick={() => deleteOrder(props.orderID)} ><MdDelete/></div>

                <span className="flex justify-center items-center gap-x-2">
                <div className="border rounded-full p-1 w-5 bg-green-500 text-white text-[0.7rem] shadow-lg "><FaCheck/></div>
                <h1 className="fonts text-[0.8rem] text-gray-600">{orderSta}</h1>
                </span>

            </span>
            
                
               
            
        </section>
        </>
    )

}



const NoOrders = ()=>{
    return(
        <>
        <section className="flex flex-col justify-center items-center gap-4">
            
            <img src={order} alt="" className="object-cover w-72"/>
            <h1 className="font">No Orders</h1>
            <p className="font text-gray-500 text-[0.8rem]">You haven't placed any order  yet.</p>

        </section>
        </>
    )
}

