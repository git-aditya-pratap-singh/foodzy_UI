import React from "react";
import order from "../../../assets/orders.webp";

const Orders = ()=>{
    return(
        <>
        <section className="pt-8 p-5">
           <NoOrders/>
        </section>
        </>
    )
}
export default Orders;

const NoOrders = ()=>{
    return(
        <>
        <section className="flex flex-col justify-center items-center gap-4">
            
            <img src={order}/>
            <h1 className="font">No Orders</h1>
            <p className="font text-gray-500 text-[0.8rem]">You haven't placed any order  yet.</p>

        </section>
        </>
    )
}