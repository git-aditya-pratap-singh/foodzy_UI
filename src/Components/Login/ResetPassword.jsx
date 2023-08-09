import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ImCross } from "react-icons/im";
import { FaUserShield } from "react-icons/fa";
import { toast } from 'react-toastify';

import { ServerAPI } from "../../serverLink";


const ResetPassword = ()=>{
    
    const {id,token} = useParams();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        password : "",
        confirm_password : ""
    })


    const handleChange = (event)=>{
        const {name, value} = event.target;
        setInput({ ...input, [name]:value });
    }

    const [errors, setErrors] = useState({});

    const handleSubmit = (event)=>{
        event.preventDefault();

        //console.log(input)
        // Form validation logic
        const validateForm = () => {
            const errors = {};

            // Validate password field
            if (!input.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
                errors.password1 = 'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, and one digit';
            }

            if(input.password != input.confirm_password){
                errors.password2= "Both passwords must match."
            }

        return errors;
        };


        // Perform form validation
        const validationErrors = validateForm();

        // If there are validation errors, set the error state
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } 
        else{
            setErrors(validationErrors);

            axios.post(`${ServerAPI}/api/reset-password/${id}/${token}`, input)
            .then((response)=>{
                
                if(response.data.success){
                    toast.success(response.data.message);
                    navigate("../../login");
                }
                else{
                    toast.error(response.data.message);
                }
            })
            .catch((err)=>{
                console.log(err);
            })

            // reset Form Details-----------
            setInput({
                password : "",
                confirm_password : ""
            })
        }

    }

    return(
        <>
        <section className={`absolute z-10 w-full h-screen bg-gradient-to-b lg:bg-gradient-to-r from-current to-transparent 
        flex justify-center items-center scale-100 ease-in-out duration-300`}>

            <div className="w-[320px] px-5 py-5 pt-10 rounded border shadow-lg bg-slate-50 fixed  
            flex flex-col gap-y-4 scale-100 ease-in-out duration-500 select-none">
                
                <div className="p-3 outline-none rounded-full bg-white shadow-lg absolute -top-6 left-[44%]">
                    <span className="text-2xl text-[#fc036f]"><FaUserShield/></span>
                </div>
                
 
                <span className="text-gray-700"><ImCross/></span>

                <h1 className="font text-gray-700 text-xl font-bold">Create new Password</h1>
                
                <p className="fonts text-[0.8rem] text-gray-600">Your new password must be different from previous
                    used passwords.</p>
                
                <form onSubmit={handleSubmit} className="space-y-3" autoComplete="off">

                    <div className="space-y-1">
                        <span className="text-gray-700 fonts text-[0.8rem]">Password</span>
                        <input type="password" placeholder="Enter new Password"
                            className="fonts w-full p-2 rounded text-[0.9rem] border"
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                            required/>

                        {errors.password1 && <span className="error">{errors.password1 }</span>}
                    </div>

                    <div className="space-y-1">
                        <span className="text-gray-700 fonts text-[0.8rem]">Confirm Password</span>
                        <input type="password" placeholder="Confirm Password"
                            className="fonts w-full p-2 rounded text-[0.9rem] border"
                            name="confirm_password"
                            value={input.confirm_password}
                            onChange={handleChange}
                            required/>

                        {errors.password2 && <span className="error">{errors.password2}</span>}
                    </div>

                    <button className="w-full p-2 rounded outline-none text-white fonts bg-[#fc036f] active:scale-95 
                    ease-in-out duration-300">Reset Password</button>

                </form>

            </div>

        </section>
        </>
    )
}
export default ResetPassword;