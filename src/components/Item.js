
const Item = (props) => {
    return (
        <div className={"p-3 bg-primary-500 rounded-md shadow-md "+props.className}>
            <img className="object-center resize-y rounded-t-md h-auto" src={props.src}></img>
            <div className="bg-primary-400 pt-2 rounded-b-md">
                {props.children}
            </div>
        </div>
    );
}


export default Item;

/*
<button className="bg-secondary-500 text-white hover:text-primary-500 font-semibold py-2 px-4 border border-gray-400 hover:border-primary-500 rounded shadow">
    <AiFillGithub/>
    <span>Github</span>
</button>
*/