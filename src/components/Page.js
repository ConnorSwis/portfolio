import React from "react";

import Gallery from "./Gallery/Gallery";
import About from "./About"

import background from "../assets/connor5.jpg";
import Inspiration from "./Inspiration/Inspiration";
import Break from "./PageBreak";

function Page() {

    return (
        <div className="relative w-auto h-screen ">
            
            <img
                id="home"
                src={background}
                alt="Website background with mushroom gills"
                className=" w-full pointer-events-none object-cover h-5/6"
            />
            <div className="bg-secondary-500">
                <h1 id="about" className="w-full col-1 col-span-full text-3xl sm:text-4xl md:text-7xl font-bold text-white py-8 indent-16 -scroll-mt-32 lg:-scroll-mt-[20vh]">Welcome</h1>
                <About />
                <Break />
                <Inspiration />
                <Break />
                <Gallery />
            </div>
            
        </div>
    );
};

export default Page;