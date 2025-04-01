import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const Favourites=()=>{
    const [Data,setData]=useState();
    const headers={
        id:localStorage.getItem('id'),
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get("http://localhost:1000/api/v1/get-favourite-books",{headers});
            setData(res.data.data);
        }
        fetch();
    },[]);

    return(
        <>
       <div> Favourites</div>
       <div className="h-[100vh]">
        {!Data ? <></> : <div className="flex flex-col gap-4">
            {Data.map((val,idx)=>(
                <div key={idx}>
                    <BookCard data={val}/>
                </div>
            ))}
            </div>}
            </div>
        </>
    )
}

export default Favourites;