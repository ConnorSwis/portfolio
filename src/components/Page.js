import React from "react";
import importAll from "../funcs/ImportAll";
import Item from "./Item"
import Image from "./Image";
import { AiFillGithub } from "react-icons/ai";

import imagesJson from "../assets/gallery.json";
import background from "../assets/background.png";

import meAndTavi from "../assets/Me and Tavi.jpg";
import seniorRetreat from "../assets/Senior Retreat.jpg"


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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[10%] p-20 pt-0 indent-4 bg-secondary-500 shadow-2xl">
                <h1 className=" col-1 col-span-full text-6xl font-bold text-white pt-10 indent-0">Welcome</h1>
                <Item src={meAndTavi} className="">
                    <header className="text-lg font-bold">
                        Me and Tavi
                    </header>
                    <p>
                        This is my goldendoodle, Tavi.
                    </p>
                    <p className="pb-1">She is 4.</p>
                </Item>
                <Item src={seniorRetreat} className="col-span-2 h-[40vh]">
                    <header className="text-lg font-bold">
                            Me and Tavi
                    </header>
                    <p>
                        This is my goldendoodle, Tavi.
                    </p>
                    <p className="pb-1">She is 4.</p>
                </Item>
                <Item src={seniorRetreat} className="">

                </Item>
                <div className={" col-span-1 bg-[url(" + meAndTavi + ")]"}></div>
            </div>
        </div>
    );
};

export default Page;