import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import { authActions } from "../store/auth";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/sidebar";
import axios from 'axios';


const Profile=()=>{

    const [Data,SetData]=useState(null);
    const headers={
        id:localStorage.getItem('id'),
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get("http://localhost:1000/api/v1/get-user",{headers});
            SetData(res.data);
        }
        fetch();
    },[]);

    return(
        <div className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-white">
            {!Data ? <></> : <><div className="w-1/6">
                <SideBar data={Data}/>
            </div>
            <div className="w-5/6">
                <Outlet/>
            </div></>}
        </div>
    )
}

export default Profile;