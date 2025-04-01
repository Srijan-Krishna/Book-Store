import React from "react";
import Hero from "../components/Home";
import Recents from "../components/Recents";

const Home =()=>{
    return(
        <div className="bg-zinc-900 text-white px-10 py-8">
        <Hero/>
        <Recents/>
        </div>
    )
}

export default Home;