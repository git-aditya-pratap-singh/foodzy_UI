import React from "react";
import logo from "../../assets/logo.png";
import { BsSend,BsFacebook,BsGithub,BsYoutube,BsLinkedin } from "react-icons/bs";
import {Link} from "react-router-dom";

const Footer = ()=>{
    return(
        <>
        <section className="bg-red-100 p-8 md:p-16 select-none">

            {/* section main - 1 */}

            <div className="flex flex-wrap  lg:justify-center items-start gap-8 md:gap-16">
                
                {/* section-1 */}
                <div className="flex flex-col gap-y-2 ">
                    <img src={logo} alt="Image doesn't load..." className="w-[50px]"/> 
                    <h1 className="font">Foodzy</h1>
                    <p className="fonts text-gray-500">Make your day fabulous with our hassle-free delivery.</p>                  
                </div>

                {/* section-2 */}
                <div className="flex flex-col gap-y-5 ">
                    <h1 className="font">Delivery Time</h1>

                    <div className="fonts">
                       <h1>Sunday - Thrusday</h1>
                       <p className="text-gray-500 font-thin">10:00am - 11:00pm</p>
                    </div>

                    <div className="fonts">
                       <h1>Friday - Saturday</h1>
                       <p className="text-gray-500 font-thin">Off day</p>
                    </div>
                    
                </div>

                {/* section-3 */}
                <div className="flex flex-col gap-y-3 ">
                    <h1 className="font">Contact</h1>

                    <div className="fonts">
                       <h1 className="text-gray-500">Location: Hazratganj Market, Lucknow</h1>
                       <p className="text-gray-500 font-thin">India</p>
                    </div>

                    <p className="fonts">Phone: +91 5845-89624</p>
                    <p className="fonts">Email: foodzyfoods1k@yahoo.com</p>

                </div>

                {/* section-4 */}
                <div className="flex flex-col gap-y-3">
                    <h1 className="font">Newsletter</h1>
                    <p className="fonts text-gray-500">Subscribe our newsletter</p>

                    <div className="flex border-2 p-1 border-gray-700 rounded-md">
                        <input type="email" placeholder="Enter your email" 
                          className="bg-transparent p-1 outline-none fonts"/>
                        <button className="bg-[#fc036f] rounded-md shadow-lg px-5 text-white"><BsSend/></button>
                    </div>
                   

                </div>

            </div>



            {/* section main - 2 */}

            <div className="flex flex-col md:flex-row gap-7 justify-between lg:px-20 items-start pt-10">
                 <p className="fonts text-[0.8rem] text-[#fc036f] ">Copyright - 2023 website made by Aditya Pratap Singh. All Rights Reserved.</p>

                 <div className="flex flex-row gap-x-4 justify-center items-center">
                    <h1 className="fonts">Follow</h1>
                    <h1 className="text-[#fc036f] text-xl rounded-full drop-shadow-lg"><BsFacebook/></h1>
                    <Link to="https://github.com/git-aditya-pratap-singh"><h1 className="text-[#fc036f] text-xl rounded-full drop-shadow-lg"><BsGithub/></h1></Link>
                    <Link to="https://www.youtube.com/@CodingHubTech"><h1 className="text-[#fc036f] text-xl rounded-full drop-shadow-lg"><BsYoutube/></h1></Link>
                    <Link to="https://www.linkedin.com/in/theaditya-pratap-singh/"><h1 className="text-[#fc036f] text-xl rounded-full drop-shadow-lg"><BsLinkedin/></h1></Link>
                 </div>
            </div>

        </section>
        </>
    )
}
export default Footer;