import React from 'react';
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Offers from './Components/Offers/Offers';
import Login from './Components/Login/Login';
import Dashboard from './Components/Main/Dashboard';
import Cart from './Components/Main/Cart';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Components/Login/Signup';
import MenuRestaurant from './Components/Main/MenuRestaurant';

import Header from './Components/Main/Header';
import Search from './Components/Main/Search';
import User from './Components/Main/UserDetails/User';
import Help from './Components/Main/Help';

import Orders from "./Components/Main/UserDetails/Orders";
import PageNotFound from "./Components/Main/PageNotFound";
import { Toaster } from 'react-hot-toast';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useAuth } from "./Components/Context/auth";
import {useNavigate} from 'react-router-dom';
import ResetPassword from './Components/Login/ResetPassword';


//mport Axios from "axios";

const App = ()=>{
  const [auth]= useAuth();
  
    return(
      <> 
      <Toaster />
      <ToastContainer 
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"/>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={!auth.token ? <Navbar/> : <Navigate to="/dashboard"/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/offers" element={<Offers/>}/>  
          </Route>
          
          <Route path="/login" element={!auth.token ? <Login/> : <Navigate to="/dashboard"/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/resetpassword/:id" element={<ResetPassword/>}/>
          
         
          <Route path="/dashboard" element={auth.token ? <Header/> : <Navigate to="/login"/>}>
            {/* Route index element={<Dashboard/>} */}
            <Route index element={<Dashboard/>}/>
            <Route path="/dashboard/Restaurant/Menu/:id" element={<MenuRestaurant/>}/>
            <Route path="/dashboard/search" element={<Search/>}/>
            <Route path="/dashboard/help" element={<Help/>}/>
            <Route path="/dashboard/user" element={<User/>}/>
            <Route path="/dashboard/cart" element={<Cart/>}/>
          </Route>
         

          <Route path='/*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
      </>
    )
}


export default App;
