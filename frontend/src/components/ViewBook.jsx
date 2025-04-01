import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { authActions } from "../store/auth";

const ViewBook=()=>{
    const isLoggedIn=useSelector((state)=>{
        return state.auth.isLoggedIn;
    });
    
    const {id} =useParams();
    const headers={
        bookid:id,
        id:localStorage.getItem('id'),
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
    const [Data,setData]=useState(null);
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get(`http://localhost:1000/api/v1/get-book-by-id/${id}`);
            setData(res.data.data);
        }
        fetch();
    },[]);
    const addToCart=async()=>{
        await axios.put("http://localhost:1000/api/v1/add-to-cart",{},{headers});
        alert("Book added to Cart");
    }
    const addToFav=async()=>{
        const res=await axios.put("http://localhost:1000/api/v1/add-to-favourite",{},{headers});
        alert(res.data.message);
    }
    return(
        <div className="px-12 py-8 bg-zinc-900 flex gap-8">
            <div className=" bg-zinc-800 rounded p-4 h-[88vh] w-3/6 flex items-centre justify-center">
                    {""}
                    {Data==null ? "Loading.." : 
                    <img src={Data.url} alt='/' className="h-[70vh]"></img>
                    }
                </div>
                <div className="p-4 w-3/6 flex flex-col gap-7">
                <h1 className="text-4xl text-zinc-300 font-semibold ">{Data==null ? "LOading.." : Data.title}</h1>
                <p className="text-zinc-400 mt-1"> by {Data==null ? "LOading.." : Data.author}
                </p>
                <p className="text-zinc-500 mt-4 text-xl">
                {Data==null ? "LOading.." : Data.desc}
                </p>
                <p className="flex mt-4 items-center justify-start text-zinc-400">
                    <GrLanguage className="me-3"/>{Data==null ? "LOading.." : Data.language}
                </p>
                <p className="mt-4 text-zinc-100 text-3xl font-semibold">
                Price : ₹{Data==null ? "LOading.." : Data.price}
                </p>
                {!isLoggedIn ? <></> :
                <div className="flex gap-10 ">
                    <FaCartPlus className="text-amber-100 size-12 hover:text-zinc-500 duration-200" onClick={addToCart}/>
                    <FaHeart className="text-amber-100 size-12 hover:text-red-600 duration-200" onClick={addToFav}/>
                </div>}
                </div>
            </div>
    )
}

export default ViewBook;