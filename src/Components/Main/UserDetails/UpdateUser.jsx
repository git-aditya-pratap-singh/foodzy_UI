import React, {useState, useEffect} from "react";
import axios from "axios";
import { ImCross } from "react-icons/im";
import { toast } from 'react-toastify';
import { useAuth } from "../../Context/auth";

import { useSelector, useDispatch } from "react-redux";
import { UserState } from "../../Store/StateSlice";

import { ServerAPI } from "../../../serverLink";

const UpdateUser = ()=>{
    const dispatch = useDispatch();
    const resetToggle = useSelector((store)=>store.status.userCross);

    const [auth,setAuth ]= useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const SendData = (event)=>{
        event.preventDefault();

        axios.put(`${ServerAPI}/api/update-user/${auth.user.id}`, {name,email,phone})
        .then((response)=>{
            if(response.data.success){
                
                setAuth({ ...auth, user:response.data.user})
                let ls = localStorage.getItem("auth")
                ls = JSON.parse(ls)
                ls.user = response.data.user
                localStorage.setItem('auth', JSON.stringify(ls))
                toast.success(`${response.data.message}`);
                dispatch(UserState(false));

            }
            else{
                toast.error(response.data.message);
            }

        })
        .catch((err)=>{
            console.log(err);
        })

    }

    useEffect(()=>{
        const {name, email, phone} = auth?.user;
        setName(name);
        setEmail(email);
        setPhone(phone);

    },[auth?.user])


    return(
        <>
        <section className={`absolute z-10 w-full h-screen bg-gradient-to-b lg:bg-gradient-to-r from-current to-transparent flex 
        justify-center items-center ${resetToggle ? "scale-100 ease-in-out duration-300" : "scale-0"}`}>
        
        <section className="w-[320px] container px-5 py-5 rounded border shadow-lg bg-slate-50 fixed  
        flex flex-col gap-y-4 scale-100 ease-in-out duration-500 select-none">

            <span className="text-gray-700" onClick={()=>dispatch(UserState(false))}><ImCross/></span>
            <h1 className="font text-gray-700 text-xl font-bold">User Details</h1>
            
            <p className="fonts text-[0.8rem] text-gray-600">The user details have been entered and the new user details have been updated.</p>


            <form onSubmit={SendData} className="flex flex-col gap-y-4" autoComplete="off">


                <div className="space-y-1">
                    <span className="text-gray-700 fonts text-[0.8rem]">Name</span>
                    <input type="name" placeholder="Name"
                            className="fonts w-full p-2 rounded text-[0.9rem] border"
                            name="name" value={name} onChange={(e)=>setName(e.target.value)}
                            required/>
        
                </div>

                <div className="space-y-1">
                    <span className="text-gray-700 fonts text-[0.8rem]">Email</span>
                    <input type="email" placeholder="Email"
                            className="fonts w-full p-2 rounded text-[0.9rem] border"
                            name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                            required/>
        
                </div>

                <div className="space-y-1">
                    <span className="text-gray-700 fonts text-[0.8rem]">Phone no</span>
                    <input type="phone" placeholder="Phone"
                            className="fonts w-full p-2 rounded text-[0.9rem] border"
                            name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}
                            required/>
        
                </div>

                <button className="p-2 rounded-md outline-none text-white fonts bg-[#fc036f] active:scale-95 
                ease-in-out duration-300">Update</button>
               
            </form>

        </section>
        </section>
        </>
    )
}
export default UpdateUser;


