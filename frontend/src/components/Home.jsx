import React from "react";

const Hero = ()=>{
    return(
        <div className="h-[75vh] flex">
        <div className="w-full lg:w-3/6 flex flex-col lg:items-start justify-center"><h1 className="text-6xl font-semibold text-yellow-100 lg:text-left">Discover Your Next Big Read
            </h1>
            <p className="mt-4 text-xl text-zinc-300 lg:text-left">
                Uncover captiviting stories, enriching knowledge, and endless inspiration in our collection of books
            </p>
            <button className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full mt-8">
                Discover Books
            </button>
            </div>
        <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-centre justify-center border rounded opacity-60">
        <img src="https://media.istockphoto.com/id/1218656325/photo/laptop-with-online-library-realistic-3d-rendering.jpg?s=170667a&w=is&k=20&c=hhltpEScL48ejMEf_NRoe4dEwSLO_jV3asgpkZPvz4U="/>
        </div>
        </div>
    );
}

export default Hero;