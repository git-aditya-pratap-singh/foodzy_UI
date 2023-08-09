import React, {useState, useEffect} from "react";
import { BsXSquare } from "react-icons/bs";
import ad from "../../assets/46678.jpg";
import axios from "axios";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { CheckState } from "../Store/StateSlice";
import { ServerAPI } from "../../serverLink";
import { useAuth } from "../Context/auth";

const ChangeAddress = ({value})=>{

    const dispatch = useDispatch();
    const [auth,setAuth ]= useAuth();
    
    const [address,setAddress]= useState('');
    const [flatno,setFlatno]= useState('');
    const [landmark,setLandmark]= useState('');


    const handleSubmit =(event)=>{
        event.preventDefault();
        
        axios.put(`${ServerAPI}/api/change-address/${auth.user.id}`, {address, flatno, landmark})
        
        .then((response)=>{

            if(response.data.success){
                setAuth({ ...auth, user:response.data.user})
                let ls = localStorage.getItem("auth")
                ls = JSON.parse(ls)
                ls.user = response.data.user
                localStorage.setItem('auth', JSON.stringify(ls))
                toast.success(`${response.data.message}`);
                dispatch(CheckState(false));
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
        const {address, flatno, landmark} = auth?.user
        setAddress(address)
        setFlatno(flatno)
        setLandmark(landmark)

    },[auth?.user])

    return(
        <>
        <section className={`max-w-[400px] h-screen bg-white p-8 py-10 flex flex-col justify-start items-start space-y-4 rounded-md shadow-2xl`}>

        <span className="flex justify-between items-center w-full">
          <h1 className="font text-gray-700 border-b py-2">Save Delivery Address</h1>
          <h1 className="text-2xl text-gray-700" 
          onClick={()=>dispatch(CheckState(false))}>
            <BsXSquare/></h1>
        </span>

        <img src={ad} alt="Image doesn't load..." className="py-5 select-none"/>


        <form onSubmit={handleSubmit} className="w-full space-y-4" autoComplete="on">

        <span className="p-3 flex flex-col justify-center border rounded ">
            <p className="text-[0.7rem] text-gray-500 fonts">Address</p>
            <input type="text" className="mt-1 outline-none fonts text-[0.8rem]" placeholder="..."
            name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </span>

        <span className="p-3 flex flex-col justify-center border rounded ">
            <p className="text-[0.7rem] text-gray-500 fonts">Door/Flat No.</p>
            <input type="text" className="mt-1 outline-none fonts text-[0.8rem]" placeholder="..."
            name="flat" value={flatno} onChange={(e)=>setFlatno(e.target.value)}/>
        </span>

        <span className="p-3 flex flex-col justify-center border rounded ">
            <p className="text-[0.7rem] text-gray-500 fonts">Landmark</p>
            <input type="text" className="mt-1 outline-none fonts text-[0.8rem]" placeholder="..."
            name="landmark" value={landmark} onChange={(e)=>setLandmark(e.target.value)}/>
        </span>

        <button className="p-3 rounded bg-[#fc036f] text-white fonts w-full text-[0.9rem] shadow-lg outline-none
        active:scale-95 ease-in-out duration-300">SAVE ADDRESS & PROCEED</button>
        </form>
        
        </section>
        </>
    )
}
export default ChangeAddress;