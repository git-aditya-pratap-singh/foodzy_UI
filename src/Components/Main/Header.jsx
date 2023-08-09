import React, {useState} from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUserCircle,FaHamburger } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/logo.png';
import { useAuth } from "../Context/auth";

import CurrentLocation from "./CurrentLocation";

import { useSelector } from "react-redux";


const Header = ()=>{
    const [toggle, setToggle] = useState(false); // used for current location section
    const [auth, setAuth] = useAuth();

     // fetch data from store
    const foodsItem = useSelector((store)=>store.items.data);
    
    
    return(
        <> 
        {/* Current Location section */}
        <span className={`fixed z-10 top-20 ease-in-out duration-500 ${toggle ? 'left-0' : 'left-[-600px]'}`}>
            <CurrentLocation/>
        </span> 


        {/* Desktop menu */}

        <section className="w-full flex flex-row justify-start lg:justify-between lg:px-14 items-center gap-x-5 p-4 bg-[rgb(22 22 23/50%)] head drop-shadow-md fixed
        select-none z-10 ">

            <div className="flex gap-x-5 lg:gap-x-10 items-center">

                {/* Logo section */}
                <NavLink to="/dashboard">
                    <img src={logo} alt="Error" className="w-[45px] md:w-[45px] hover:scale-110 duration-300"/>
                </NavLink> 

                
                <span className="flex flex-col lg:flex-row justify-center items-start fonts gap-y-2 lg:gap-x-3">
                    <h1 className="text-[#fc036f] fonts underline underline-offset-8">HOME</h1>
                    <div className="flex items-center gap-x-2">
                        <h1 className="text-[0.9rem] text-gray-500 ">{`${auth.user.address ? `${auth.user.address}` : "Muslim Nagar, Alambagh, Lucknow" }`} </h1>
                        <span className="text-[#fc036f] cursor-pointer" 
                        onClick={()=>setToggle(!toggle)}><IoIosArrowDown/></span>
                    </div>
                </span>
 
            </div>

            
            <div className="hidden lg:flex gap-x-20 header">

                <NavLink to="/dashboard/search">
                <span className="flex items-center justify-center gap-x-2">
                    <span className="text-xl"><BiSearch/></span>
                    <h1 className="fonts">Search</h1>
                </span>
                </NavLink>


                <NavLink to="/dashboard/help">
                <span className="flex items-center justify-center gap-x-2">
                    <span className="text-xl"><MdOutlineSupportAgent/></span>
                    <h1 className="fonts">Help</h1>
                </span>
                </NavLink>

                
                <NavLink to="/dashboard/user">
                <span className="flex items-center justify-center gap-x-2">
                    <span className="text-xl"><FaUserCircle/></span>
                    <h1 className="fonts">{auth?.user?.name}</h1>
                </span>
                </NavLink>


                <NavLink to="/dashboard/cart">
                <span className="flex items-center justify-center gap-x-2 relative"> 
                    <span className="text-xl"><BsFillCartPlusFill/></span>
                    <h1 className="fonts">Cart</h1>

                    {!foodsItem.length ? '' 
                    :(
                    <div className="absolute -top-2 left-[102%] p-1 w-5 h-5 flex justify-center items-center
                     bg-[#fc036f] rounded-full text-white text-[0.7rem] font">
                        {foodsItem.length}
                    </div>
                    )
                    }
                    
                </span>
                </NavLink>

            </div>

        </section>



        {/* Mobile and Tablet menu */}

        <section className="lg:hidden w-full flex flex-row justify-evenly items-center gap-x-5 p-4 bg-white fixed z-10 
        bottom-0 border-t">
            
            
            <span className="flex items-center justify-center gap-x-2">
                   <span className="text-2xl rounded-full p-2 shadow-lg">
                   <NavLink to="/dashboard"><FaHamburger/></NavLink>
                   </span>
            </span>
            

            <span className="flex items-center justify-center gap-x-2">
                <span className="text-2xl rounded-full p-2 shadow-lg relative">
                <NavLink to="/dashboard/cart" ><BsFillCartPlusFill/></NavLink>
                </span>

                {!foodsItem.length ? '' 
                    :(
                        <div className="absolute top-2 left-[32%] p-1 w-5 h-5 flex justify-center items-center bg-[#fc036f] rounded-full text-white text-[0.7rem] font">
                            {foodsItem.length}
                        </div>
                    )
                }
            
            </span>

            <span>
               <img src={logo} alt="Error" className="w-[45px] md:w-[45px]"/>
            </span>

            <span className="flex items-center justify-center gap-x-2">
                <span className="text-2xl rounded-full p-2 shadow-lg">
                <NavLink to="/dashboard/search"><BiSearch/></NavLink>
                </span>
            </span>

            <span className="flex items-center justify-center gap-x-2">
                <span className="text-2xl rounded-full p-2 shadow-lg">
                <NavLink to="/dashboard/user"><FaUserCircle/></NavLink>
                </span>
            </span>

        </section>

        <Outlet/>
        </>
    )
}
export default Header;