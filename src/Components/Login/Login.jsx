import React, {useState} from "react";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
import {NavLink} from "react-router-dom";
import login2 from "../../assets/log.png";
import { GrMail } from "react-icons/gr";
import { FaLock, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';
import {useNavigate,useLocation} from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../Context/auth";
import { ServerAPI } from "../../serverLink";
// Redux- Toolkit---------
import {useDispatch} from "react-redux";
import { ForgetState } from "../Store/StateSlice";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

const Login = ()=>{
    
    React.useEffect(()=>{
    Aos.init({offset: 200,
        duration: 600,
        easing: 'ease-in-out',
        once:true,
        delay: 100});
    },[])


    
    // LOGIN DATA
    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    })

    // Checked Error
    const [errors, setErrors] = useState({});

    // Reset Password State------
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [auth,setAuth ]= useAuth();
    const location = useLocation();

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setLoginData({...loginData, [name]: value})
    }
 
    const handleSubmit = (event)=>{
        event.preventDefault();

        // Form validation logic
        const validateForm = () => {
            const errors = {};

            // Validate email field
            if (!loginData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                errors.email = 'Invalid email address';
            }

        return errors;
        };

        // Perform form validation
        const validationErrors = validateForm();

        // If there are validation errors, set the error state
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            console.log(errors);
        }
        else{
            // Form is valid, submit the data or perform further actions
            setErrors(validationErrors);

            // Data send from client to server
            axios.post(`${ServerAPI}/api/login`, loginData)
            .then((response)=> {
                if(response.data.success){
                    toast.success(`${response.data.message}`);
                    setAuth({
                        ...auth,
                        user: response.data.user,
                        token: response.data.token
                      })

                      localStorage.setItem('auth',JSON.stringify(response.data))

                      navigate( location.state || '/dashboard')  
                }
                else{
                    toast.error(response.data.message);
                }
            })
            .catch((err)=>{
                console.log(err);
            });
        }
    }

    return(
        <>
        <section className="flex flex-col lg:flex-row h-screen bg-white overflow-x-hidden">

            <div className="basis-1/2 flex justify-center items-center h-full w-full relative" data-aos="fade-right">

                <div className="clip h-full w-full absolute"></div>
                <img src={login2} alt="image doesn't load..." className="w-[500px] z-10" />
            </div>
            
            <div className="basis-1/2 flex justify-center items-center bg-white py-8" data-aos="fade-left">

                <div className="w-80 lg:w-96 p-2 flex flex-col space-y-10 ">

                    <h1 className="font text-3xl font-extrabold">Log<span className="text-[#fc036f]">in</span></h1>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4" autoComplete="on">

                        <div className="flex flex-row gap-x-2 justify-start items-center bg-white px-3 
                        fonts border-b-2">

                            <p><GrMail color="#fc036f"/></p>
                            <input type="email" placeholder="Email" 
                            className="w-full p-2 outline-none"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            required/>
                        
                        </div>

                        {errors.email && <span className="error">{errors.email}</span>}


                        <div className="flex flex-row gap-x-2 justify-center items-center bg-white px-3 
                        fonts border-b-2">

                            <p><FaLock color="#fc036f"/></p>
                            <input type="password" placeholder="Password" 
                            className="w-full p-2 outline-none"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            required/>

                        </div>

                        <div className="flex flex-row gap-x-2 justify-between items-center px-3 fonts text-[0.8rem]">
                            <div className="flex items-center gap-x-2">

                                <input type="checkbox" className="accent-blue-500" required/>

                                <p>Remember Me</p>
                            </div>
                            <p onClick={()=> dispatch(ForgetState(true))} className="cursor-pointer hover:text-orange-500">Forget Password?</p>
                            
                        </div>

                       <button className="p-2 w-full outline-none fonts text-white bg-red-400 rounded-md shadow-sm
                       active:scale-95 ease-in-out duration-300">LOGIN</button>

                       <p className="text-[0.8rem] fonts mx-auto">Don't have an account? 
                       <NavLink to="/signup"><span className="text-blue-400"> Signup</span></NavLink>
                       
                       </p>
                    </form>

                    <div className="flex justify-center items-center gap-x-2 mx-auto">
                        <h1 className="w-12 bg-black border"></h1>
                        <p className="text-[0.8rem] mx-auto fonts">Or you can join with</p>
                        <h1 className="w-12 bg-black border"></h1>
                    </div>

                    <div className="flex justify-center gap-x-6">
                        <h1 className="p-2 rounded-full text-2xl border shadow-md "><FcGoogle/></h1>
                        <h1 className="p-2 rounded-full text-2xl border shadow-md text-slate-800"><FaGithub/></h1>
                        <h2 className="p-2 rounded-full text-2xl border shadow-md text-blue-600"><FaLinkedin/></h2>
                    </div>   
                </div>
            </div>
            <ForgetPassword/>
        </section>
        </>
    )
}
export default Login;