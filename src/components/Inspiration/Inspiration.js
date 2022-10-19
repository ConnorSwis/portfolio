import Card from "./Card";


const Inspiration = () => {
    return (
        <div>
            <div id="inspiration" className="w-full text-center text-white text-6xl pb-10 scroll-mt-[16vh]">
                Inspiration
            </div>
            <div className="p-10 flex flex-wrap xl:flex-nowrap gap-2 items-stretch justify-around">
                <Card 
                    src="https://avatars.githubusercontent.com/u/100814403?v=4"
                    name="Ortal Wikoff"
                    gh="https://github.com/OrtalWikoff"
                >
                    My Hebrew teacher who learned full stack developement for fun, Morah Wikoff
                    took hours of classes for the sake of learning. She taught me that I can learn
                    anything if I dedicate enough time and effort to it. 
                </Card>
                <Card 
                    src="https://avatars.githubusercontent.com/u/7872329?v=4"
                    name="Ben Awad"
                    gh="https://github.com/benawad"
                    >
                        Ben is a full stack developer who keeps logs on YouTube about the
                        development and business ends of various startups. He demonstrates
                        the importance of marketing not only the business, but yourself.
                    </Card>
                <Card 
                    src="https://avatars.githubusercontent.com/u/6288722?v=4"
                    name="John Hammond"
                    gh="https://github.com/JohnHammond"
                    >
                        An educational personality online, John Hammond is a self-taught cybersec expert.
                        He documents his process and shows how anyone can analyze malware. Hammond
                        inspired me to pursue cybersecurity in college.
                    </Card>
                <Card 
                    src="https://pbs.twimg.com/profile_images/1407134988949090306/WI9hanDd_400x400.jpg"
                    name="Tren Black"
                    gh="https://github.com/Trenblack"
                    >
                        Black is a compsci major who influenced me to choose a degree in computer science. He keeps a log of his experience getting his degree.
                    </Card>
            </div>
        </div>
    );
};

export default Inspiration;