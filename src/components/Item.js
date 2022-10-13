/* eslint-disable jsx-a11y/anchor-has-content */
const Item = (props) => {
    return (
        <div >
            <img className={"px-3 pt-3 rounded-b-none shadow-md rounded-lg bg-primary-500 place-items-center " + props.className} src={props.src} alt="" />
            <div className={"p-3 rounded-t-none shadow-md rounded-lg bg-primary-500 place-items-center " + props.className} >
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