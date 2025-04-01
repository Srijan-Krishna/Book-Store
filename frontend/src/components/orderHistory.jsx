import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const OrderHistory=()=>{

    const [Data,setData]=useState();
    const headers={
        id:localStorage.getItem('id'),
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get("http://localhost:1000/api/v1/get-order-history",{headers});
            setData(res.data.data);
            console.log(res.data.data);
        }
        fetch();
    },[]);

    return(
        <div>
            {!Data ? <></> : <div>
                {Data.map((val,idx)=>(
                    <div key={idx}>
                        <BookCard data={val.book}/>
                    </div>
                ))}
                </div>}
        </div>
    )
}

export default OrderHistory;