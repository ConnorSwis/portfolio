import { GitHub, YouTube } from "./Icons";


const Card = (props) => {
    return (
        <div class="inline-flex justify-center">
            <div class="rounded-lg shadow-lg bg-secondary-600 max-w-sm">
                <img class="rounded-t-lg pointer-events-none w-full" src={props.src} alt={props.name} />
                <div class="p-6 ">
                    <h5 class="text-white lg:text-xl font-medium mb-2">{props.name}</h5>
                    <p class="text-white text-base mb-4">
                        {props.children}
                    </p>
                    <button
                        type="button"
                        class="inline-block text-primary-500 font-medium text-3xl
                            leading-tight uppercase rounded shadow-md
                            hover:text-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0
                            active:text-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        <GitHub href={props.gh}></GitHub>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;