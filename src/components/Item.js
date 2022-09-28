import {AiFillGithub} from "react-icons/ai";



const Item = (props) => {
    return (
        <div className={"p-3 shadow-md rounded-lg bg-primary-500" + props.className}>
            <img src={props.src} alt="" />
            <p className="text-xl">{props.title}</p>
            <p>{props.children}</p>
            <AiFillGithub/>
        </div>
    );
}


export default Item;