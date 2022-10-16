import React from "react";

import Gallery from "./Gallery";
import About from "./About"

import background from "../assets/background.png";

function Page() {

    return (
        <div className="relative w-auto h-screen ">
            <img
                id="home"
                src={background}
                alt="Website background with mushroom gills"
                className="w-full h-5/6 pointer-events-none object-cover "
            />
            <div className="bg-secondary-500">
                <h1  className="w-full col-1 col-span-full text-6xl sm:text-8xl font-bold text-white py-8 indent-16 scroll-mt-4 ">Welcome</h1>
                <About />
                <Gallery />

            </div>
            
        </div>
    );
};

export default Page;