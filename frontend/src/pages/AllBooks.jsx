import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

const AllBooks=()=>{
    const [Books,SetBooks]=useState("Loading...");
    
    useEffect(()=>{
        const fetch=async()=>{
          const response= await axios.get("http://localhost:1000/api/v1/get-books");
          SetBooks(response.data.data);
        }
        fetch();
    },[]);
    return(
        <div className="bg-zinc-900 px-4">
            <h4 className="text-3xl text-yellow-100">All Books</h4>
        <div className="my-4 grid girs-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
           {Books!="Loading..." ? Books.map((val,ind)=>(
             <div key={ind}>
                <BookCard data={val}/>
             </div>
           )) : "Loading.."}
        </div>
        </div>
    );
}

export default AllBooks;