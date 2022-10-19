import { FaGithub, FaYoutube } from "react-icons/fa"

const GitHub = (props) => {
    return (
        <a href={props.href} target="_blank" rel="noreferrer">
            <FaGithub/>
        </a>
    );
};

const YouTube = (props) => {
    return (
        <a href={props.href} target="_blank" rel="noreferrer">
            <FaYoutube/>
        </a>
    );
};

export { GitHub, YouTube };