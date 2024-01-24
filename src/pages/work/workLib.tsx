
import DEM from "../../assets/dem.png";
import DryEye from "../../assets/dry-eye-july.png";
import NPExplorer from "../../assets/np-explorer.png";
import Pacer from "../../assets/pacer.png";
import PropPulse from "../../assets/propeller-pulse.png";
import Techtonic from "../../assets/techtonic.png";

export const workLibrary = [
    {
        title: "National Park Explorer",
        role: "Frontend",
        link: "http://np-explorer.s3-website-us-east-1.amazonaws.com/",
        img: NPExplorer,
        description: (
            <p>
                A modern take on US National Parks, utlizing the National Parks and National Weather APIs, to help plan
                for your next trip
            </p>
        ),
    },
    {
        title: "Drug Epidemic Memorial",
        role: "Fullstack",
        link: "https://wall.drugepidemicmemorial.org/",
        img: DEM,
        description:
            "A digital memorial, built from the ground up, to help victims feel heard and mourn as well as an empowering tool for conferences and rallies.",
    },
    {
        title: "Propeller Pulse",
        role: "Frontend",
        link: "https://healthcaretrendsreport.com/",
        img: PropPulse,
        description: "A one-stop shop for some unique news in the world of healthcare technology",
    },
    {
        title: "Pacer",
        role: "Frontend",
        link: "https://lombardoc4.github.io/pacer/",
        img: Pacer,
        description: "No longer question your pace, confirm your average mile times with Pacer",
    },
    {
        title: "Dry Eye July",
        role: "Frontend",
        link: "https://www.dryeyetech.com/",
        img: DryEye,
        description: "Dry Eye Disease Awareness Campaign",
    },
    {
        title: "Techtonic Reading List",
        role: "Fullstack",
        link: "https://lombardoc4.github.io/TechtonicReadingList/",
        img: Techtonic,
        description: "Find authors and their books Mark Hurst interviews on his Techtonic radio show",
    },
];