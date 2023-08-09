import React,{useState} from "react";
import { GrMail } from "react-icons/gr";
import { ImCross } from "react-icons/im";
import resetimg from "../../assets/reset.jpg";
import axios from "axios";
import { toast } from 'react-toastify';
import { ServerAPI } from "../../serverLink";
import { useSelector, useDispatch } from "react-redux";
import { ForgetState, ResetState } from "../Store/StateSlice";


const ForgetPassword = ()=>{
    const dispatch = useDispatch();
    const resetToggle = useSelector((store)=>store.status.forgetCross);

    const [emailField, setEmailField] = useState({
        email : ""
    });


    const SendData = (event)=>{
        const {name, value} = event.target;
        setEmailField({...emailField, [name]: value})
    }

    const Sendemail = (event)=>{
        event.preventDefault();
    
        try{
            axios.post(`${ServerAPI}/api/forget-password`, emailField)
            
            .then((response)=>{
                if(response.data.success){
                    toast.success(`${response.data.message}`);
                    dispatch(ForgetState(false));
                    dispatch(ResetState(true));
                }
                else{
                    toast.error(`${response.data.message}`);
                }
                //reset form Details (emails)
                setEmailField({
                    email : ""
                }) 
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
        <div className={`absolute z-10 w-full h-screen bg-gradient-to-b lg:bg-gradient-to-r from-current to-transparent flex justify-center items-center
        ${resetToggle ? "scale-100 ease-in-out duration-300" : "scale-0"}`}>

        <section className="w-[320px] container px-5 py-5 rounded border shadow-lg bg-slate-50 fixed  
        flex flex-col gap-y-4 scale-100 ease-in-out duration-500 select-none">

            <span className="text-gray-700" onClick={()=>dispatch(ForgetState(false))}><ImCross/></span>
            <h1 className="font text-gray-700 text-xl font-bold">Reset Password</h1>
            <img src={resetimg} alt=""/>
            <p className="fonts text-[0.8rem] text-gray-600">Enter the email associated with your account and we'll 
            send an email with instructions to reset your password.</p>


            <form onSubmit={Sendemail} className="flex flex-col gap-y-4" autoComplete="off">

                <div className="flex flex-row gap-x-2 justify-start items-center bg-white px-3 fonts border rounded-md">

                    <p><GrMail color="#fc036f"/></p>
                        <input type="email" placeholder="Email" name="email" value={emailField.email}
                        className="w-full p-2 outline-none text-[0.9rem]" 
                        onChange={SendData}  
                        required/>
                </div>

                <button className="p-2 rounded-md outline-none text-white fonts bg-[#fc036f] active:scale-95 
                ease-in-out duration-300">Send Instructions</button>
               
            </form>

        </section>
        </div>
        </>
    )
}
export default ForgetPassword;