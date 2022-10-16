import headShot from "../assets/headshot.jpg";
import { FaPython, FaReact, FaDocker } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiLinuxfoundation } from "react-icons/si";

const About = () => {
    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-white text-center lg:text-left">
                <div className="container mx-auto xl:px-32 text-center lg:text-left">
                    <div className="grid lg:grid-cols-2 items-center">
                        <div className="mb-12 lg:mb-0 ">
                            <div
                                className="relative block border-l-2 border-primary-500  px-6 py-12 md:px-12 lg:-mr-14"
                                style={{"background": "hsla(0, 0, 255, 0.55)", "backdrop-filter": "blur(30)", "z-index": 1}}
                            >
                                <h2 id="about" className="text-3xl font-bold mb-4 display-5 scroll-mt-32 lg:scroll-mt-[40vh]">
                                    Connor J. Swislow
                                </h2>
                                <p className=" mb-12">
                                    Hello, I'm Connor and this is my website. I am 18 years old and a student at The Weber School.
                                    Inspired by my Hebrew teacher,
                                    <a href="https://github.com/OrtalWikoff" target="_blank" rel="noopener noreferrer"> Ortal Wikoff</a>,
                                    I decided to give web design a try. 
                                </p>

                                <div className="grid place-items-center grid-flow-col gap-x-6 justify-between">
                                    <div className="mb-12 md:mb-0">
                                        <FaPython className="text-3xl font-bold mb-4 text-red-500 w-full" />
                                        <h5 className="text-lg font-medium mb-0">Python</h5>
                                    </div>

                                    <div className="mb-12 md:mb-0">
                                        <FaReact className="text-3xl font-bold mb-4 text-primary-500 w-full" />
                                        <h5 className="text-lg font-medium mb-0">React.js</h5>
                                    </div>

                                    <div className="mb-12 md:mb-0" >
                                        <DiMongodb className="text-3xl font-bold mb-4 text-yellow-400 w-full" />
                                        <h5 className="text-lg font-medium mb-0">MongoDB</h5>
                                    </div>

                                    <div className="mb-12 md:mb-0">
                                        <FaDocker          className="text-3xl font-bold mb-4 text-green-500 w-full" />
                                        <h5 className="text-lg font-medium mb-0">Docker</h5>
                                    </div>

                                    <div className="mb-12 md:mb-0">
                                        <SiLinuxfoundation className="text-3xl font-bold mb-4 text-indigo-500 w-full" />
                                        <h5 className="text-lg font-medium mb-0">Linux</h5>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="inline-flex justify-center">
                            <img
                                src={headShot}
                                class="w-auto shadow-lg fancy-border-radius rotate-lg-6 max-h-[45vh] md:max-h-[50vh] lg:max-h-[90vh]"
                                alt="Connor wearing a blazer looking fly."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
