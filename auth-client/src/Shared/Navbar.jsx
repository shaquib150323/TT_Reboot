import React, { useState } from 'react'
import logo from "../assets/logo.svg";
import { MdRestaurantMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

 const [nav, setNav] = useState(false)
 const navigate = useNavigate()
 const { user, setUser } = useUserContext()
 console.log(user);

 const handleNav = () => {
  setNav(!nav)
 }

 return (

  <>


   <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
    {
     user?.user.isVerified === false && (<div className='bg-red-500 py-3 px-4 text-white'>
      <Link to="/verifyOtp">Please verify your account</Link>
     </div>)}


    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6 container mx-auto">
     <div className=" flex items-center justify-between">
      <img src={logo} alt="" className='h-14 cursor-pointer' />

      <div className="lg:flex hidden gap-8 items-center">
       <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Today's Special</a>
       <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Why TasteTracker</a>
       <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Our Menu</a>
       <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Add food</a>
       <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Popular food</a>
       {
        user ? (
         <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
           <div className="w-10 rounded-full">
            <img alt="Profile image" src={user?.user?.profileImage} />
           </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
           <li>
            <a className="justify-between">
             Profile

            </a>
           </li>
           <li><a>Settings</a></li>
           <li><button onClick={() => {
            localStorage.clear()
            location.reload()
            navigate("/")
           }}>Logout</button></li>
          </ul>
         </div>) : (<Link to='/login'>
          <button className="bg-[#F54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Login
          </button>
         </Link>
        )
       }


      </div>

      <div className="block lg:hidden z-40 " onClick={handleNav}>
       {
        nav ? (<RxCross1 size={25} className='text-[#191919] cursor-pointer' />) : (<MdRestaurantMenu className='text-red-500 cursor-pointer' size={25} />)
       }
      </div>

      <div className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 ${nav ? "right-0" : "right-[-100%]"} pt-24`}>
       <div className="flex flex-col gap-8 ">
        <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Today's Special</a>
        <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Why TasteTracker</a>
        <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Our Menu</a>
        <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Add food</a>
        <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Popular food</a>


        <button className="bg-[#F54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Login</button>



       </div>


      </div>





     </div>
    </div>
   </div>
  </>


 )
}

export default Navbar


















