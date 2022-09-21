import React from "react";

function Page() {
    return (
        <div className='grid grid-cols-3 gap-8'>
            <div className='col-1 col-span-3'>
                <h1 className='text-5xl text-bold'>Ooga booga</h1>
            </div>
            <div className='bg-primary-100 rounded-3xl shadow-md border-primary-700 border border-spacing-8 animate-[fadeIn_.5s_ease-in_forwards]'>
                <p className='p-4'>Dolor excepteur in cillum proident do. Ad sit in enim tempor ullamco do quis dolore quis fugiat. Laborum deserunt quis laborum eu consectetur. Do velit ullamco laboris nostrud adipisicing esse. Culpa qui et enim cupidatat exercitation consequat tempor mollit et nulla id. Cillum reprehenderit occaecat fugiat sint duis elit tempor ad amet quis tempor. Deserunt eiusmod irure irure ipsum reprehenderit proident tempor excepteur nostrud sint ullamco et voluptate.</p>
                <img src="./background.png"></img> {/* TODO: Fix this idk */}
            </div>
        </div>
    );
};

export default Page;