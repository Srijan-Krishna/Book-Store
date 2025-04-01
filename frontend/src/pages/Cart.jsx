import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { useNavigate } from "react-router-dom";

const Cart=()=>{
    const [Data,setData]=useState(null);
    const navigate=useNavigate();
    const headers={
        id:localStorage.getItem('id'),
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
    useEffect(()=>{
        const fetch=async()=>{
           const res= await axios.get("http://localhost:1000/api/v1/get-cart",{headers});
           setData(res.data.data);
        }
        fetch();
    },[]);

    const click=async()=>{
        await axios.post("http://localhost:1000/api/v1/place-order",{},{headers});
        navigate("/profile/orderHistory");
    }

    return(
        
        <div className="text-center">
        {!Data ? <></> : <div className="flex flex-col gap-6">
            {Data.map((val,idx)=>(
                <div key={idx}>
                    <BookCard data={val}/>
                </div>
            ))}
            
            </div>}
            <button className="mb-3 py-4 px-2 mt-3 rounded-2xl bg-zinc-600 hover:bg-blue-400 duration-200" onClick={click}>{Data==null || Data.length>0 ? "Place Order" : ""}</button>
        </div>
    )
}

export default Cart;