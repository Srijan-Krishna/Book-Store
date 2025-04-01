import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";

const Sidebar=({data})=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const click=()=>{
        dispatch(authActions.logout());
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('role');
        navigate('/');
    }
    return(
        <div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-[100%]">
            <div className="flex items-center felx-col justify-centre">
            <img src={data.avatar} className="h-[12vh]"/>
            <p className="mt-3 text-xl text-zinc-100 font-semibold">{data.username}</p>
            </div>
            <p className="mt-1 text-zinc-300">{data.email}</p>
            <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>
            <div className="flex flex-col mt-4 py-2 ">
            <Link to="/profile" className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300">Favourites</Link>
            <Link to="/profile/orderHistory" className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300 px-2">Order History</Link>
            <Link to="/profile/settings" className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300">Settings</Link>
            </div>
            <button className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300" onClick={click}>Logout</button>
        </div>
    )
}

export default Sidebar;