import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Navbar =()=>{
    const links=[
        {
            title:"Home",
            link:"/"
        },
        {
            title:"All Books",
            link:"/all-books"
        },
        {
            title:"Cart",
            link:"/cart",
        },
        {
            title:"Profile",
            link:"/profile"
        }
    ];

    const isLoggedIn=useSelector((state)=>{
        return state.auth.isLoggedIn
    });
    if(isLoggedIn===false){
        links.splice(2,2);
    }

    const [MobileNav,setMobileNav]=useState("hidden");
   
    
   
    return (
        <div className="flex items-center justify-between bg-zinc-800 text-white px-8 py-4">
            <div className="flex items-center">
                <img className="h-10 me-4" src="https://img.pikbest.com/png-images/20241016/creative-book-logo-vector-design_10968791.png!w700wp"/>
                <h1 className="text-2xl front-semibold">Book Store</h1>
            </div>
            <div className="nav-links-book flex items-center gap-4">
                <div className="flex gap-4">
                {links.map((val,inx)=>(
                  <Link to={val.link} className="hover:text-blue-500 transition-all duration-280 " key={inx}>
                    {val.title}
                    </Link>
                ))}
            </div>
            {isLoggedIn===false ? <div className=" flex gap-4">
                <Link to='/SignIn' className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-500 transition-all duration-280">LogIn</Link>
                <Link to='/SignUp' className="px-2 py-1 bg-blue-500 rounded  hover:bg-white hover:text-zinc-500 transition-all duration-280" >SignUp</Link>
            </div> : <></>}
            </div>
        </div>
    );
}

export default Navbar;