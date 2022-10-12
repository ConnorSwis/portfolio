import React from "react";
import importAll from "../funcs/ImportAll";
import Item from "./Item"
import Image from "./Image";

const imageDict = importAll();
var images = [];
for (var image in images) {
    images.push(imageDict[image]);
};

function Page() {
    return (
        <div className="relative w-auto h-screen ">
            <img 
                src={imageDict['background.png']}
                alt="Website background with mushroom gills"
                className="w-full h-5/6 object-cover pointer-events-none "
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-stretch gap-8 p-20 pt-0 indent-4 bg-secondary-500">
                <h1 className="col-1 col-span-full text-6xl font-bold text-white pt-10 indent-0">Welcome</h1>
                <Item title="Ooga 1" src={images['background.png']} className="">ooga booga</Item>
                {
                    images.map((image) => (<Image key={image.toString()} src={image} ></Image>))
                }
                <p className="col-1 col-span-1 shadow-xl p-4 rounded-lg bg-primary-500">lorem ipsum non adipisicing et nisi fugiat eiusmod sit officia mollit proident quis nulla esse sunt anim. Incididunt nulla Lorem pariatur et est esse labore mollit consequat consectetur aute culpa magna et. Dolore ullamco minim minim amet fugiat enim qui aliqua. Dolore laborum tempor ad tempor aute. Excepteur laborum elit Lorem pariatur dolore laborum mollit occaecat exercitation ipsum aliquip cillum amet reprehenderit. Id laborum eiusmod velit velit amet magna enim aute Lorem.</p>
                <p className="col-1 col-span-1 shadow-xl p-4 rounded-lg bg-primary-500">lorem ipsum non adipisicing et nisi fugiat eiusmod sit officia mollit proident quis nulla esse sunt anim. Incididunt nulla Lorem pariatur et est esse labore mollit consequat consectetur aute culpa magna et. Dolore ullamco minim minim amet fugiat enim qui aliqua. Dolore laborum tempor ad tempor aute. Excepteur laborum elit Lorem pariatur dolore laborum mollit occaecat exercitation ipsum aliquip cillum amet reprehenderit. Id laborum eiusmod velit velit amet magna enim aute Lorem.</p>
                <p className="col-1 col-span-1 shadow-xl p-4 rounded-lg bg-primary-500">lorem ipsum non adipisicing et nisi fugiat eiusmod sit officia mollit proident quis nulla esse sunt anim. Incididunt nulla Lorem pariatur et est esse labore mollit consequat consectetur aute culpa magna et. Dolore ullamco minim minim amet fugiat enim qui aliqua. Dolore laborum tempor ad tempor aute. Excepteur laborum elit Lorem pariatur dolore laborum mollit occaecat exercitation ipsum aliquip cillum amet reprehenderit. Id laborum eiusmod velit velit amet magna enim aute Lorem.</p>
                <p className="col-1 col-span-1 shadow-xl p-4 rounded-lg bg-primary-500">lorem ipsum non adipisicing et nisi fugiat eiusmod sit officia mollit proident quis nulla esse sunt anim. Incididunt nulla Lorem pariatur et est esse labore mollit consequat consectetur aute culpa magna et. Dolore ullamco minim minim amet fugiat enim qui aliqua. Dolore laborum tempor ad tempor aute. Excepteur laborum elit Lorem pariatur dolore laborum mollit occaecat exercitation ipsum aliquip cillum amet reprehenderit. Id laborum eiusmod velit velit amet magna enim aute Lorem.</p>
                <p className="col-1 col-span-1 shadow-xl p-4 rounded-lg bg-primary-500">lorem ipsum non adipisicing et nisi fugiat eiusmod sit officia mollit proident quis nulla esse sunt anim. Incididunt nulla Lorem pariatur et est esse labore mollit consequat consectetur aute culpa magna et. Dolore ullamco minim minim amet fugiat enim qui aliqua. Dolore laborum tempor ad tempor aute. Excepteur laborum elit Lorem pariatur dolore laborum mollit occaecat exercitation ipsum aliquip cillum amet reprehenderit. Id laborum eiusmod velit velit amet magna enim aute Lorem.</p>
                <p className="col-1 col-span-1 shadow-xl p-4 rounded-lg bg-primary-500">lorem ipsum non adipisicing et nisi fugiat eiusmod sit officia mollit proident quis nulla esse sunt anim. Incididunt nulla Lorem pariatur et est esse labore mollit consequat consectetur aute culpa magna et. Dolore ullamco minim minim amet fugiat enim qui aliqua. Dolore laborum tempor ad tempor aute. Excepteur laborum elit Lorem pariatur dolore laborum mollit occaecat exercitation ipsum aliquip cillum amet reprehenderit. Id laborum eiusmod velit velit amet magna enim aute Lorem.</p>
                <p className="col-1 col-span-1 shadow-xl p-4 rounded-lg bg-primary-500">lorem ipsum non adipisicing et nisi fugiat eiusmod sit officia mollit proident quis nulla esse sunt anim. Incididunt nulla Lorem pariatur et est esse labore mollit consequat consectetur aute culpa magna et. Dolore ullamco minim minim amet fugiat enim qui aliqua. Dolore laborum tempor ad tempor aute. Excepteur laborum elit Lorem pariatur dolore laborum mollit occaecat exercitation ipsum aliquip cillum amet reprehenderit. Id laborum eiusmod velit velit amet magna enim aute Lorem.</p>
                <p className="col-1 col-span-1 shadow-xl p-4 rounded-lg bg-primary-500">lorem ipsum non adipisicing et nisi fugiat eiusmod sit officia mollit proident quis nulla esse sunt anim. Incididunt nulla Lorem pariatur et est esse labore mollit consequat consectetur aute culpa magna et. Dolore ullamco minim minim amet fugiat enim qui aliqua. Dolore laborum tempor ad tempor aute. Excepteur laborum elit Lorem pariatur dolore laborum mollit occaecat exercitation ipsum aliquip cillum amet reprehenderit. Id laborum eiusmod velit velit amet magna enim aute Lorem.</p>
                <p className="col-1 col-span-1 shadow-xl p-4 rounded-lg bg-primary-500">lorem ipsum non adipisicing et nisi fugiat eiusmod sit officia mollit proident quis nulla esse sunt anim. Incididunt nulla Lorem pariatur et est esse labore mollit consequat consectetur aute culpa magna et. Dolore ullamco minim minim amet fugiat enim qui aliqua. Dolore laborum tempor ad tempor aute. Excepteur laborum elit Lorem pariatur dolore laborum mollit occaecat exercitation ipsum aliquip cillum amet reprehenderit. Id laborum eiusmod velit velit amet magna enim aute Lorem.</p>
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