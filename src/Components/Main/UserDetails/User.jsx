import React, {useState} from "react";
import img from "../../../assets/download.png";

import { HiShoppingBag } from "react-icons/hi";
import { FaUserEdit, FaHeart, FaPizzaSlice} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { AiFillSetting,AiOutlineLogout } from "react-icons/ai";
import UpdateUser from "./UpdateUser";

import FoodzyOne from "./FoodzyOne";
import Orders from "./Orders";
import FavRestaurents from "./FavRestaurents";
import Address from "./Address";

import { toast } from 'react-toastify';
import { useAuth } from "../../Context/auth";

import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserState } from "../../Store/StateSlice";


const User = ()=>{

    const dispatch = useDispatch();
    //const toggle = useSelector((store)=>store.status.userCross);
    //console.log(toggle)

    const [order, setOrder] = useState(true);
    const [foodzy, setFoodzy] = useState(false);
    const [favourites ,setFavourites] = useState(false);
    const [address, setAddress] = useState(false);
    const [payments, setPayments] = useState(false);
    const [settings, setSettings] = useState(false);

    const [auth,setAuth ]= useAuth();

    const navigate = useNavigate();


    return(
        <>

        {/* Update User UI Design */}
        <UpdateUser/>
        {/* End of Update User UI Design */}

        <section className="pt-24 bg-white navb select-none relative">

            <div className="flex flex-row space-x-3 sm:space-x-10 justify-start items-center px-2 lg:px-10 pb-5 border-b">

                <div className="flex flex-row space-x-3 sm:space-x-10 justify-start items-center border rounded-md p-3 lg:p-5">

                    <div className="rounded-full shadow-lg w-24 relative">

                        <span className="absolute -bottom-3 left-16 text-[1.1rem] text-[#fc036f] bg-white p-2 rounded-full border shadow-md
                            active:scale-90 ease-in-out duration-300 cursor-pointer" onClick={()=>dispatch(UserState(true))}>
                            <p className="flex justify-center items-center"><FaUserEdit/></p>
                        </span>

                        <img src={img} alt="" className="object-cover"/>
                    </div>

                    <div className="flex flex-col items-start space-y-2 fonts">
                        <h1 className="text-[1.3rem] sm:text-[2rem] text-gray-600">Hello, {auth?.user?.name}</h1>
                        <h3 className="text-gray-500 text-[0.9rem]">+91 {auth?.user?.phone}</h3>
                        <p className="text-gray-500 text-[0.9rem]">{auth?.user?.email}</p>
                    </div>

                </div>

            </div>


            <div className="flex flex-row space-x-5 justify-start items-start sm:p-5 usernav pb-24">

                <div className="bg-white py-6 px-5 sm:px-14 border rounded shadowA nav">

                    <ul className="list-none flex flex-col space-y-8 justify-center items-start fonts select-none">

                        
                        <li className="flex items-center gap-x-2 cursor-pointer" 
                        onClick={()=> {
                                setOrder(true);
                                setFoodzy(false);
                                setFavourites(false);
                                setAddress(false);
                                setPayments(false);
                                setSettings(false);
                            }
                            }>
                            <span className={`text-[1rem] bg-gray-600 p-2 rounded-full border text-white 
                            ${ order ? 'bg-rose-500 scale-110 ease-in-out duration-300' : ''}`}>
                            <HiShoppingBag/></span>
                            <p className={`${ order ? 'text-[#fc036f]' : ''} hidden lg:block`}>Orders</p>
                        </li>
                        
                        

                        <li className="flex items-center gap-x-2 cursor-pointer" 
                        onClick={()=> {
                            setFoodzy(true);
                            setOrder(false);
                            setFavourites(false);
                            setAddress(false);
                            setPayments(false);
                            setSettings(false);
                        }
                        }>
                            <span className={`text-[1rem] bg-gray-600 p-2 rounded-full border text-white 
                            ${ foodzy ? 'bg-rose-500 scale-110 ease-in-out duration-300' : ''}`}>
                            <FaPizzaSlice/></span>
                            <p className={`${ foodzy ? 'text-[#fc036f]' : ''} hidden lg:block`}>Foodzy</p>
                        </li>



                        <li className="flex items-center gap-x-2 cursor-pointer"
                         onClick={()=> {
                            setFavourites(true);
                            setOrder(false);
                            setFoodzy(false);
                            setAddress(false);
                            setPayments(false);
                            setSettings(false);
                        }
                        }>
                            <span className={`text-[1rem] bg-gray-600 p-2 rounded-full border text-white 
                            ${ favourites ? 'bg-rose-500 scale-110 ease-in-out duration-300' : ''}`}>
                                <FaHeart/></span>
                            <p className={`${ favourites ? 'text-[#fc036f]' : ''} hidden lg:block`}>Favourites</p>
                        </li>




                        <li className="flex items-center gap-x-2 cursor-pointer"
                        onClick={()=> {
                            setAddress(true);
                            setFoodzy(false);
                            setOrder(false);
                            setFavourites(false);
                            setPayments(false);
                            setSettings(false);
                        }
                        }>
                            <span className={`text-[1rem] bg-gray-600 p-2 rounded-full border text-white 
                            ${ address ? 'bg-rose-500 scale-110 ease-in-out duration-300' : ''}`}>
                            <MdLocationPin/></span>
                            <p className={`${ address ? 'text-[#fc036f]' : ''} hidden lg:block`}>Address</p>
                        </li>




                        <li className="flex items-center gap-x-2 cursor-pointer"
                        onClick={()=> {
                            setSettings(true);
                            setFoodzy(false);
                            setOrder(false);
                            setFavourites(false);
                            setPayments(false);
                            setAddress(false);
                        }
                        }>
                            <span className={`text-[1rem] bg-gray-600 p-2 rounded-full border text-white
                            ${ settings ? 'bg-rose-500 scale-110 ease-in-out duration-300' : ''}`}>
                                <AiFillSetting/></span>
                            <p className={`${ settings ? 'text-[#fc036f]' : ''} hidden lg:block`}>Settings</p>
                        </li>



                        <li className="flex items-center gap-x-2 cursor-pointer"
                         onClick={()=> {
                            setPayments(true);
                            setAddress(false);
                            setFoodzy(false);
                            setOrder(false);
                            setFavourites(false);
                            setSettings(false);

                            // logout section --------------------
                            setAuth({
                                ...auth,
                                user:null,
                                token:'',
                              })
                              localStorage.removeItem('auth')
                              toast.success("Log Out Successfully");
                              navigate('/');
                        }
                        
                        }>
                            <span className={`text-[1rem] bg-gray-600 p-2 rounded-full border text-white
                            ${ payments ? 'bg-rose-500 scale-110 ease-in-out duration-300' : ''}`}>
                            <AiOutlineLogout/></span>
                            <p className={`${ payments ? 'text-[#fc036f]' : ''} hidden lg:block`}>Logout</p>
                        </li>

                       
                    </ul>
                </div>
                
                <div className="w-full">
                   {order && <Orders/>}
                   {foodzy && <FoodzyOne/>}
                   {favourites && <FavRestaurents/>}
                   {address && <Address/>}
                   {payments && <h1>Waiting...</h1>}
                   {settings && <h1>Waiting...</h1>}
                </div>
                

            </div>

            
        
        </section>
        
        </>
    )
}
export default User;