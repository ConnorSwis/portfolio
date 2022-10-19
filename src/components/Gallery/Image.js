const Image = (props) => {
    return (
        <div>
            <div className="m-auto rounded-md shadow-lg">
                <img
                    className="rounded-t-md w-full max-h-[300px] md:max-h-[400px] lg:max-h-[500px]"
                    src={props.src}
                    alt={props.alt}
                />
                <div className="text-black py-2 rounded-b-md pl-3 pr-1 bg-primary-500">
                    {props.children}
                </div>
            </div>
        </div>
    );
};


export default Image;

/*
<button className="bg-secondary-500 text-white hover:text-primary-500 font-semibold py-2 px-4 border border-gray-400 hover:border-primary-500 rounded shadow">
    <AiFillGithub/>
    <span>Github</span>
</button>
*/