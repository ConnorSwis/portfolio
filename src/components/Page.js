import React from "react";
import { useEffect, useState } from "react";
import importAll from "../funcs/ImportAll";
import Item from "./Item"
import Image from "./Image";
import {AiFillGithub} from "react-icons/ai";

import imagesJson from "../assets/gallery.json";
import background from "../assets/background.png";

console.log(imagesJson)

const imageDict = importAll();
let images = [];
for (var image in imageDict) {
    images.push(imageDict[image]);
};

console.log(images)
function Page() {

    return (
        <div className="relative w-auto h-screen">
            <img 
                src={background}
                alt="Website background with mushroom gills"
                className="w-full h-5/6 pointer-events-none object-cover"
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-20 pt-0 indent-4 absolute bg-secondary-500">
                <h1 className="col-1 col-span-full text-6xl font-bold text-white pt-10 indent-0">Welcome</h1>
                {
                    images.map((image) => {
                        return (
                            <div className="max-h-[50%]" key={image}>
                                <Item className="col-1 col-span-1 " src={image}>
                                    <p className="bg-primary-400 rounded-md p-1 font-medium">{image}</p>
                                </Item>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        // <div className='grid grid-cols-3 place-items-center gap-8'>
        //     <div className='col-1 col-span-3'>
        //         <h1 className='text-5xl text-bold'>Ooga booga</h1>
        //     </div>
        //     <div className='col-2 bg-gradient-to-bl rounded-3xl shadow-lg border-2 animate-[fadeIn_.5s_ease-in_forwards]'>
        //         <p className='p-4'>Dolor excepteur in cillum proident do. Ad sit in enim tempor ullamco do quis dolore quis fugiat. Laborum deserunt quis laborum eu consectetur. Do velit ullamco laboris nostrud adipisicing esse. Culpa qui et enim cupidatat exercitation consequat tempor mollit et nulla id. Cillum reprehenderit occaecat fugiat sint duis elit tempor ad amet quis tempor. Deserunt eiusmod irure irure ipsum reprehenderit proident tempor excepteur nostrud sint ullamco et voluptate.</p>
        //     </div>
    );
};

export default Page;