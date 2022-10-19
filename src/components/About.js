import headShot from "../assets/headshot.jpg";
import { FaPython, FaReact, FaDocker } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiLinuxfoundation } from "react-icons/si";
import FadeInSection from "./FadeInSection";

const About = () => {
    return (
        <FadeInSection>

            <div className="container my-24 px-6 mx-auto ">
                <section className="mb-32 text-white text-left">
                    <div className="container mx-auto px-32 text-left">
                        <div className="grid grid-cols-2 items-center">
                            <div className="mb-12 ">
                                <div
                                    className="relative block border-l-2 border-primary-500 px-6 py-12"
                                >
                                    <h2 className="text-3xl font-bold mb-4 display-5 ">
                                        Connor J. Swislow
                                    </h2>
                                    <p className="mb-8 text-lg">
                                        Hello, I'm Connor and this is my website. I am 18 years old and a student at The Weber School.
                                        
                                        {/* <a
                                            href="https://github.com/OrtalWikoff"
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-primary-500"
                                        > Ortal Wikoff</a> */} Below is my repertoire.
                                    </p>

                                    <div className="grid place-items-center grid-flow-col gap-x-6 -mb-12 ">
                                        <div className="mb-12">
                                            <FaPython className="text-3xl font-bold mb-4 text-red-500 w-full" />
                                            <h5 className="text-lg font-medium mb-0">Python</h5>
                                        </div>

                                        <div className="mb-12">
                                            <FaReact className="text-3xl font-bold mb-4 text-primary-500 w-full" />
                                            <h5 className="text-lg font-medium mb-0">React.js</h5>
                                        </div>

                                        <div className="mb-12" >
                                            <DiMongodb className="text-3xl font-bold mb-4 text-yellow-400 w-full" />
                                            <h5 className="text-lg font-medium mb-0">MongoDB</h5>
                                        </div>

                                        <div className="mb-12">
                                            <FaDocker className="text-3xl font-bold mb-4 text-green-500 w-full" />
                                            <h5 className="text-lg font-medium mb-0">Docker</h5>
                                        </div>

                                        <div className="mb-12">
                                            <SiLinuxfoundation className="text-3xl font-bold mb-4 text-indigo-500 w-full" />
                                            <h5 className="text-lg font-medium mb-0">Linux</h5>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <img
                                    src={headShot}
                                    class="w-auto shadow-lg fancy-border-radius rotate-lg-6 max-h-[90vh] "
                                    alt="Connor wearing a blazer looking fly."
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </FadeInSection>
    );
};

export default About;
