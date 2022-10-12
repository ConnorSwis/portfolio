import {AiFillGithub} from "react-icons/ai";


const Item = (props) => {
    return (
        <div className="p-3 shadow-md rounded-lg bg-primary-500 place-items-center">
            <div className={props.className}>
                <img src={props.src} alt="" />
                <p className="text-xl">{props.title}</p>
                <p>{props.children}</p>
                <div>
                    <button className="bg-secondary-500 text-white hover:text-primary-500 font-semibold py-2 px-4 border border-gray-400 hover:border-primary-500 rounded shadow">
                        <AiFillGithub/>
                        <span>Github</span>
                    </button>

                </div>
                <div className="">
                    <a className="" href="https://github.com/ConnorSwis" target={"_blank"} rel="noreferrer"></a>
                </div>
            </div>
        </div>
    );
}


export default Item;