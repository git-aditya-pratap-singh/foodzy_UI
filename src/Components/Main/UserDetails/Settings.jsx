import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify'; 
import { useAuth } from "../../Context/auth";
import { ServerAPI } from "../../../serverLink";

const Settings = ()=>{

    const [auth,setAuth ]= useAuth();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        cupassword : "",
        npassword : "",
        cpassword : ""
    })

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setInput({ ...input, [name]:value });
    }

    const [errors, setErrors] = useState({});

    const handleSubmit = (event)=>{
        event.preventDefault();

        // Form validation logic
        const validateForm = () => {
            const errors = {};

            // Validate password field
            if (!input.npassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
                errors.password1 = 'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, and one digit';
            }

            if(input.npassword != input.cpassword){
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

            axios.post(`${ServerAPI}/api/change-password/${auth?.user?.id}`, input)
            .then((response)=>{
                if(response.data.success){
                    toast.success(response.data.message);

                    // logout section --------------------
                    setAuth({
                        ...auth,
                        user:null,
                        token:'',
                      })
                    localStorage.removeItem('auth')
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
                cupassword: "",
                npassword : "",
                cpassword : ""
            })
        }

    }


    return(
        <>
        <section className="p-3 lg:p-0 -ml-3 lg:ml-0">
            <div className="max-w-[400px] bg-white p-5 rounded border drop-shadow-lg space-y-3">

                <h1 className="font text-gray-700 text-xl font-bold pb-2 border-b">Change Password</h1>
                <p className="fonts text-[0.8rem] text-gray-600">Enter the Current password associated with your account and we'll 
                    change your password.</p>
                
                <form className="space-y-2" onSubmit={handleSubmit} autoComplete="off">
                <div className="space-y-1">
                    <span className="text-gray-700 fonts text-[0.8rem]">Current Password</span>
                    <input type="password" placeholder="Enter Current Password"
                            className="fonts w-full p-2 rounded text-[0.9rem] border"
                            name="cupassword"
                            value={input.cupassword}
                            onChange={handleChange}
                            required/>
                </div>


                <div className="space-y-1">
                    <span className="text-gray-700 fonts text-[0.8rem]">New Password</span>
                    <input type="password" placeholder="Enter New Password"
                            className="fonts w-full p-2 rounded text-[0.9rem] border"
                            name="npassword"
                            value={input.npassword}
                            onChange={handleChange}
                            required/>
                        {errors.password1 && <span className="error">{errors.password1 }</span>}
                </div>


                <div className="space-y-1">
                    <span className="text-gray-700 fonts text-[0.8rem]">Confirm Password</span>
                    <input type="password" placeholder="Enter Confirm Password"
                            className="fonts w-full p-2 rounded text-[0.9rem] border"
                            name="cpassword"
                            value={input.cpassword}
                            onChange={handleChange}   
                            required/> 
                        {errors.password2 && <span className="error">{errors.password2}</span>}      
                </div>

                <button className="w-full p-2 rounded outline-none text-white fonts bg-[#fc036f] active:scale-95 
                ease-in-out duration-300">Submit</button>
                </form>

            </div>
        </section>
        
        </>
    )

}
export default Settings;