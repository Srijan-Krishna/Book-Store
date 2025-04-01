import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const Recents = ()=>{
    const [Books,SetBooks]=useState(null);
    
    useEffect(()=>{
        const fetch=async()=>{
          const response= await axios.get("http://localhost:1000/api/v1/get-recent-books");
          SetBooks(response.data.data);
        }
        fetch();
    },[]);
    return(
      <div className="mt-8 px-4">
        <h4 className="text-3xl text-yellow-100">Recently Added Books</h4>
        <div className="my-4 grid girs-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
           {Books && Books.map((val,ind)=>(
             <div key={ind}>
                <BookCard data={val}/>
             </div>
           ))}
        </div>
      </div>
    );
}

export default Recents;