import Item from "./Item";

import seniorRetreat from "../assets/senior_retreat.jpg";
import carmiJosh from "../assets/carmi_and_josh.jpg";
import chattanooga from "../assets/chattanooga.jpg";
import barMitzvah from "../assets/bar_mitzvah.jpg";
import shabbaton from "../assets/shabbaton.jpg";
import jake from "../assets/jake_holding.jpg";
import theTable from "../assets/table.jpg";
import family from "../assets/family.jpg";

const Gallery = () => {
    return (
        <div
            id="gallery"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center
            gap-y-8 gap-x-8 md:gap-x-10 lg:gap-x-28 py-10 px-20
            scroll-mt-8"
        >
            <Item
                src={shabbaton}
                alt="Mr. M, Mr. M, Sammy, Gil, and Connor in front of a lake, looking spiffy."
            >
                <header className="font-semibold text-lg">
                    Shabbaton
                </header>
                <p className=" text-base">Mr. Muliawan, Mr.  McIntyre, Sammy, Gil, and me at Camp Ramah</p>
                <footer className="text-xs pt-1">March 2022</footer>
            </Item>
            <Item
                src={seniorRetreat}
                alt="Jake, Connor, and Mark taking a selfie."
            >
                <header className="font-semibold text-lg">
                    Senior Retreat
                </header>
                <p>Jake, me, and Mark</p>
                <footer className="text-xs pt-1">September 2022</footer>
            </Item>
            <Item
                src={carmiJosh}
                alt="Left to right: Carmi, Josh, Connor taking a selfie before exams."
            >
                <header className="font-semibold text-lg">
                    Midterms
                </header>
                <p>Carmi, Josh, and me taking a selfie before exams.</p>
                <footer className="text-xs pt-1">February 2022</footer>
            </Item>
            <Item
                src={chattanooga}
                alt="Connor poking his head through a face cutout board in Chattanooga, TN"
            >
                <header className="font-semibold text-lg">
                    Choo Choo
                </header>
                <p>Road trip to Chattanooga for the best BBQ in the country.</p>
                <footer className="text-xs pt-1">July 2022</footer>
            </Item>
            <Item
                src={jake}
                alt="Jake holding Connor in his arms. Connor is wearing the Baum Squad jersey, the Esports Club's Rainbow 6 team."
            >
                <header className="font-semibold text-lg">
                    Club Fair
                </header>
                <p>Jake holding me behind the Esports Club table at the club fair. I am wearing our Rainbow 6 team's jersey.</p>
                <footer className="text-xs pt-1">August 2022</footer>
            </Item>
            <Item
                src={theTable}
                alt="Connor, Jonathan, Skyler, Ilan."
            >
                <header className="font-semibold text-lg">
                    The Table
                </header>
                <p>At Dream Hack ATL, we won a raffle for the table under a brand new computer. We had to take it on MARTA.</p>
                <footer className="text-xs pt-1">November 2019</footer>
            </Item>
            <Item
                src={barMitzvah}
                alt="Connor at his Bar Mitzvah surrounded by his classmates."
            >
                <header className="font-semibold text-lg">
                    Bar Mitzvah
                </header>
                <p>At Dream Hack Atl, we won the raffle for the table holding a brand new computer.</p>
                <footer className="text-xs pt-1">11 November 2017</footer>
            </Item>
            <Item
                src={family}
                alt=""
            >
                <header className="font-semibold text-lg">
                    My Family
                </header>
                <p>Kiera, Michelle (Mom), Skyler, and my dog, Tavi.</p>
                <footer className="text-xs pt-1">October 2021</footer>
            </Item>


        </div>
    );
};

export default Gallery;