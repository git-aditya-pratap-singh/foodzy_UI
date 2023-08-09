import React,{useState} from "react";
import axios from "axios";
import {IMG_CDN } from "../../Config";
import logo from "../../assets/payment-logo.png";
import fssai from "../../assets/fssai.jpg"
import nonveg from "../../assets/nonveg.png";
import paymentimg from "../../assets/Payment.svg";
import { toast } from 'react-toastify';
import { FaHome,FaMapMarkerAlt,FaRupeeSign } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import {useNavigate} from 'react-router-dom';
import EmptyCart from "./EmptyCart";
import ChangeAddress from "./ChangeAddress";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount, removeItem } from "../Store/CartSlice";
import { CheckState, PaymentState } from "../Store/StateSlice";
import {useAuth} from "../Context/auth";
import { ServerAPI } from "../../serverLink";

const Cart = ()=>{

    const [auth, setAuth] = useAuth();

    // fetch data from store
    const foodsItem = useSelector((store)=>store.items.data);
   
    const dispatch = useDispatch();

    // check the (edit address) hooks status
    const toggle = useSelector((store)=>store.status.data);

    // check the payment Status
    const payment = useSelector((store)=>store.status.paymentCross);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(payment);
    

    var totalamt = 0;
    var GST = 16;
    var Delivery = 24;

    //--------------------- SEND ORDERS -----------------------


    const SentOrders = async(event)=>{
        event.preventDefault();

        try{
           await axios.post(`${ServerAPI}/api/payment-checkout`, {totalamt, GST, Delivery})
           
            .then((response)=>{
                if(response.data.success){

                    const options = {

                        key: "rzp_test_t413fd9XoEErIr",
                        amount: response.data.data.amount,
                        currency: response.data.data.currency,
                        name: "Foodzy",
                        description: "Foodzy Transaction",
                        image: logo,
                        order_id: response.data.data.id,
                        handler: async (response) => {
                
                            await axios.post(`${ServerAPI}/api/paymentverification/${auth?.user?.email}`, {response, foodsItem, totalamt, GST, Delivery})   
                            
                            .then((res)=>{
                                if(res.data.success){
                                    toast.success(res.data.message);
                                    dispatch(PaymentState(false))
                                    navigate('../user')
                                }
                                else{
                                    toast.error(res.data.message);
                                }
                            })
                            .catch((err)=>{
                                console.log(err);
                            })
                                
                        },
                        prefill: {
							contact: auth.user.phone,
							name: auth.user.name,
							email: auth.user.email
						},
						notes : {
							description:"hello"
						},
                        theme: {
                            color: "#FC036F",
                        },
                    };
                    const rzp1 = new window.Razorpay(options);
                    rzp1.on('payment.failed', function (response){
                        toast.error("Payment Failed");
                });
                    rzp1.open();  
                    
                }
                else{
                    toast.error(`${response.data.message}`);
                }
            })
            
        }
        catch(err){
            console.log(err);
        }
         
    }

    return !foodsItem.length ? (<EmptyCart/>) : (
        <>
        {/* Change(Edit) Address Section */}

        <section className={`fixed z-10 top-20 ease-in-out duration-300 ${toggle ? 'left-0' : '-left-[600px]'} `}>
           <ChangeAddress value={toggle}/>
        </section>



        <section className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start pt-24 p-16 gap-3">

            <div className="basis-1/2 flex flex-col space-y-8 p-5">

            
            <div className="flex flex-col gap-y-10 justify-start px-5 sm:px-10 py-10 pb-15 border rounded-md bg-white shadow-xl relative">
                
                <span className="p-2 bg-white border rounded shadow-md absolute -top-5 sm:top-10 -left-0 sm:-left-5 text-[#fc036f] text-2xl">
                    <FaMapMarkerAlt/>
                </span>

                <span className="flex flex-col space-y-1 font">
                    <h1 className="font-extrabold">Select delivery address</h1>
                    <p className="text-[0.8rem] text-gray-500">You have a saved address in this location</p>
                </span>

                <span className="flex flex-col md:flex-row gap-5 justify-start">

                    <div className="border p-5 flex flex-row space-x-3 justify-center items-start hover:shadow-md rounded">

                        <h1 className="p-1"><FaHome/></h1>

                        <span className="flex flex-col space-y-4 justify-start w-56">
                            <h2 className="font">Home</h2>

                            <p className="text-gray-500 text-[0.8rem]">

                            {(auth.user.address) ? `${auth.user.address+","+auth.user.flatno+","+auth.user.landmark}` :
                            "Gurunanak Nagar Alambagh 564/074, Muslim Nagar, Alambagh, Lucknow, Uttar Pradesh 226005, india"}

                            </p>

                            <h3 className="fonts text-[0.9rem]">34 MINS</h3>
                            <button className="bg-[#60b246] p-2 rounded shadow w-36 text-white 
                            font-bold active:scale-90 ease-linear duration-100 outline-none" 
                            onClick={()=>dispatch(PaymentState(true))}>DELIVER HERE</button>

                        </span>

                    </div>

                    <div className="border p-5 flex flex-row space-x-3 justify-center items-start hover:shadow-md rounded">
                        <h1 className="p-1"><FaMapMarkerAlt/></h1>
                        <span className="flex flex-col space-y-4 justify-start w-56">
                            <h2 className="font">Add New Address</h2>
                            <p className="text-gray-500 text-[0.8rem]">FH2V+5P7, Shivaji Nagar, Jhansi, Uttar
                                Pradesh 226005, india
                            </p>
                            
                            <button className="mb-36 p-2 border rounded shadow w-36 text-[#60b246]  
                            font-bold active:scale-90 ease-linear duration-100 outline-none"
                            onClick={
                                ()=>dispatch(CheckState(true))
                            }
                            >ADD NEW</button>

                        </span>

                    </div>

                </span>
                
               
            </div>
            

            {/* Payment */}
            <div className="flex flex-col justify-start p-10 pb-15 border rounded-md bg-white shadow-xl relative">
                <span className="p-2 bg-white border rounded shadow-md absolute -top-5 sm:top-8 -left-0 sm:-left-5 text-[#fc036f] text-2xl">
                    <GiWallet/>
                </span>
                <h1 className="font text-gray-500">Payment</h1>

               

                
                
                <section className={`${payment ? "block" : "hidden"}`}>

                    <div className="flex justify-center items-center object-cover">
                        <img src={paymentimg} alt="Image doesn't load..." className="w-96  "/>
                    </div>
                
                    <div className="flex justify-end items-center">

                    <button className="flex justify-center items-center gap-x-2 p-2 w-32 rounded outline-none bg-[#fc036f] text-white text-[0.9rem] font drop-shadow-xl
                        active:scale-90 ease-linear duration-100" onClick={SentOrders}><FaRupeeSign/> Pay now</button>
                
                    </div>
                </section>
                
                
            </div>


            </div>
            
            {/* Foods Item Reciept Section */}
            <div className="w-[340px] lg:basis-auto flex flex-col row-span-2 space-y-4 border shadow-md rounded p-4 bg-white mt-5">

                <header className="flex flex-row space-x-3 md:space-x-5 ">
                    <div>
                        <img src={
                        IMG_CDN +
                        (foodsItem[0].restaurantImage === ""
                            ? "s6fhwzl0tss0vgrqvcid"
                            : foodsItem[0].restaurantImage
                        )
                        } 

                        alt="image doesn't load..." className="w-32 rounded object-cover"/>
                    </div>

                    <div className="flex flex-col space-y-2 justify-center items-start border-b-2">
                        <h1 className="font text-sm leading-2">{foodsItem[0].restaurantName}</h1>
                        <p className="fonts text-[0.7rem] text-gray-500">{foodsItem[0].restaurantAddress}</p>
                    </div>
                </header>

                <div className="flex flex-col items-start gap-y-2 pt-3 scroll-smooth">
                
                {
                    foodsItem.map((item,index)=>{
                        return(
                            <>
                            <ItemCart {...item}/>
                            </>
                        )
                    })
                }
                
                </div>


                {/* Checkbox */}
                <div className="flex flex-row justify-center items-start space-x-4 p-2 border rounded mt-5">
                    <input type="checkbox" className="mt-2 accent-green-400"/>
                    <span>
                        <h1 className="fonts">Opt in for No-Contact Delivery</h1>
                        <p className="text-[0.8rem] w-48 text-gray-500">Unwell, or avoiding contact? Please select no-contact delivery. 
                            Partner will safely place the order outside your door (not for COD)</p>
                    </span>
                </div>
                {/* End of Checkbox */}
                
                <h1 className="fonts text-sm">Bill Details</h1>
                
                <div className="flex flex-col space-y-2 border-b pb-4">
                    <span className="flex flex-row justify-between items-center text-[0.8rem]">
                        <h1>Item Total</h1>
                        {foodsItem.map((item)=>{
                            totalamt = totalamt + item.payment
                        })} 
                        <p>₹{totalamt}</p>
                    </span>

                    <span className="flex flex-row justify-between items-center text-[0.8rem]">
                        <h1>Delivery Fee | 4.0 kms</h1>
                        <p>₹{Delivery}</p>
                    </span>
                </div>

                <span className="flex flex-row justify-between items-center text-[0.8rem] border-b pb-4">
                    <h1>GST and Restaurent Charges</h1>
                    <p>₹{GST}</p>
                </span>

                <span className="flex flex-row justify-between items-center text-[0.8rem] font pb-2">
                    <h1>TO PAY</h1>
                    <p>₹{totalamt+GST+Delivery}</p>
                </span>
                

               

            </div>
            
        </section>
        
        </>
    )
}

const ItemCart = (props)=>{
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    const increaseCountItem = (props)=>{
        
        // set the count item
        setCount(count+1);
        dispatch(increaseCount(props));
    }

    const decreaseCountItem = ()=>{
        setCount(Math.max(count-1,1));
        dispatch(decreaseCount(props));
    }


    return(
        <>
        <div className="flex flex-row space-x-4  justify-around items-center" key={props.id}>
            {
                props.itemAttribute === "VEG" ? (<img src={fssai} alt='' className="w-4 "/>)
                :(<img src={nonveg} alt='' className="w-4 "/>)
            }
            
            <h1 className="fonts text-[0.9rem]">{props.name}</h1>

            <span className="flex items-center border rounded cursor-pointer">
                
                { props.count == 1 ? 
                ( <button className="px-3 fonts text-2xl active:scale-90 hover:scale-110 text-[#fc036f] outline-none"
                onClick={()=> dispatch(removeItem(props))}>-</button>) 
                : (
                    <button className="px-3 fonts text-2xl active:scale-90 hover:scale-110 text-[#fc036f] outline-none"
                onClick={()=> decreaseCountItem(props)}>-</button>
                ) }
                

                <h1 className="fonts text-[#60b246]">{count}</h1>

                <button className="px-3 fonts active:scale-90 hover:scale-110 text-[#60b246] outline-none"
                onClick={()=> increaseCountItem(props)}>+</button>
            </span>

            <h1 className="fonts text-[0.8rem] font-thin text-gray-500">₹{props.payment}</h1>

        </div>
        
        </>
    )
}
export default Cart;