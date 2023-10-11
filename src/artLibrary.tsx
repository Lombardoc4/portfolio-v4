import { YoutubePlayer } from "./components/YoutubePlayer";

// Digital
import CestPresent from "./assets/digital/cest-present.jpg"
import CERN from "./assets/digital/cern.png"
import Intel from "./assets/digital/intel.png"
import Aries from "./assets/digital/aries.png"
import Blink from "./assets/digital/blink.png"
import YouAreWater from "./assets/digital/you-are-water.png"
import SpaceWay from "./assets/digital/space-way.png"
import Melting from "./assets/digital/meltingWorld-v2-small.png"
import EvenNuclei from "./assets/digital/even-nuclei-2.png"
import Dalia from "./assets/digital/dalia.jpg"
import Mirage from "./assets/digital/mirage.jpg"
import Essence from "./assets/digital/essence.png"
import Potential from "./assets/digital/potential.png"

// Analog
import NatureCollage from "./assets/analog/nature-collage.jpg"
import Orbs from "./assets/analog/orbs.jpg"
import Monolith from "./assets/analog/the-monolith.jpg"
import Walker from "./assets/analog/the-walker.jpg"
import Dealer from "./assets/analog/deal-with-the-dealer.png"
import Eclipse from "./assets/analog/eclipse.png"
import JungleBoogie from "./assets/analog/jungle-boogie-2.png"
import LakePowell from "./assets/analog/lake-powell.png"
import Longing from "./assets/analog/long-for-green.png"
import IceCaps from "./assets/analog/under-ice-caps.png"
import Snow from "./assets/analog/snow.png"
import SpaceRock from "./assets/analog/space-rock.png"
import SpringWarmth from "./assets/analog/spring-warmth.png"
import Cave from "./assets/analog/the-cave.png"
import Valley from "./assets/analog/valley-o-time.png"
import VillageSafety from "./assets/analog/village-safety.png"



export interface IArtPiece {
    title: string;
    description: string;
    type: string,
    year?: string,
    img?: JSX.Element
    video?: JSX.Element
}





const IMG = ({src} : {src: string}) => <img src={src} style={{width: '100%'}}/>
const VIDEO = ({src} : {src: string}) => <video style={{width: '100%'}} playsInline={true} controls disablePictureInPicture controlsList="nodownload noplaybackrate noremoteplayback" ><source src={src} type="video/mp4"/>Sorry, your browser doesn't support embedded videos.</video>
// const VIDEO = ({src} : {src: string}) => <iframe style={{width: '100%', height: 'auto'}} src="https://www.youtube.com/embed/VEaXQ_IPCb4?si=v7gFvZJM9YseaEd2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


export const artLibrary: IArtPiece[] = [
    {
        title: "C'est Present",
        year: "2023",
        description: "Adobe Illustrator",
        img: <IMG src={CestPresent} />,
        type: "digital",
    },
    {
        title: "CERN",
        year: "2022",
        description: "Adobe Illustrator",
        img: <IMG src={CERN} />,
        type: "digital",
    },
    {
        title: "Intel",
        year: "2023",
        description: "Adobe Illustrator",
        img: <IMG src={Intel} />,
        type: "digital",
    },
    {
        title: "Aries",
        year: "2023",
        description: "Adobe Illustrator",
        img: <IMG src={Aries} />,
        type: "digital",
    },
    {
        title: "Blink",
        year: "2023",
        description: "Adobe Photoshop",
        img: <IMG src={Blink} />,
        type: "digital",
    },
    {
        title: "Essence",
        year: "2023",
        description: "Adobe Illustrator",
        img: <IMG src={Essence} />,
        type: "digital",
    },
    {
        title: "You are water",
        year: "2022",
        description: "Adobe Illustrator",
        img: <IMG src={YouAreWater} />,
        type: "digital",
    },
    {
        title: "Spaceway",
        year: "2020",
        description: "Adobe Illustator",
        img: <IMG src={SpaceWay} />,
        type: "digital",
    },
    {
        title: "Potential",
        year: "2023",
        description: "Adobe Illustator",
        img: <IMG src={Potential} />,
        type: "digital",
    },
    {
        title: "Melting World",
        year: "2020",
        description: "Adobe Photoshop",
        img: <IMG src={Melting} />,
        type: "digital",
    },
    {
        title: "Even Nuclei",
        year: "2023",
        description: "Adobe Illustrator",
        img: <IMG src={EvenNuclei} />,
        type: "digital",
    },
    {
        title: "Dalia",
        year: "2017",
        description: "Adobe Photoshop",
        img: <IMG src={Dalia} />,
        type: "digital",
    },
    {
        title: "Mirage",
        year: "2017",
        description: "Adobe Photoshop",
        img: <IMG src={Mirage} />,
        type: "digital",
    },
    {
        title: "Nature Collage",
        year: "2021",
        description: "Marker & Photo Clipping on Printer Paper",
        img: <IMG src={NatureCollage} />,
        type: "analog",
    },
    {
        title: "Orbs",
        year: "2021",
        description: "Acrylic on Canvas",
        img: <IMG src={Orbs} />,
        type: "analog",
    },
    {
        title: "The Monolith",
        year: "2023",
        description: "Acrylic on Canvas",
        img: <IMG src={Monolith} />,
        type: "analog",
    },
    {
        title: "The Walker",
        year: "2022",
        description: "Acrylic, Silicon Oil, Torch on Canvas",
        img: <IMG src={Walker} />,
        type: "analog",
    },
    {
        title: "Valley o time",
        year: "2022",
        description: "Acrylic on Canvas",
        img: <IMG src={Valley} />,
        type: "analog",
    },
    {
        title: "Eclipse",
        year: "2022",
        description: "Acrylic & Magazine Clipping on Canvas",
        img: <IMG src={Eclipse} />,
        type: "analog",
    },
    {
        title: "Jungle Boogie 2",
        year: "2018",
        description: "Sharpie on Canvas",
        img: <IMG src={JungleBoogie} />,
        type: "analog",
    },
    {
        title: "Lake Powell",
        year: "2023",
        description: "Acrylic on Canvas",
        img: <IMG src={LakePowell} />,
        type: "analog",
    },
    {
        title: "Spring Warmth",
        year: "2022",
        description: "Acrylic on Canvas",
        img: <IMG src={SpringWarmth} />,
        type: "analog",
    },
    {
        title: "Longing for Green",
        year: "2019",
        description: "Acrylic on Canvas",
        img: <IMG src={Longing} />,
        type: "analog",
    },
    {
        title: "Under Ice Caps",
        year: "2019",
        description: "Acrylic on Canvas",
        img: <IMG src={IceCaps} />,
        type: "analog",
    },
    {
        title: "Deal with the Dealer",
        year: "2022",
        description: "Marker on Construction Paper",
        img: <IMG src={Dealer} />,
        type: "analog",
    },
    {
        title: "Space Rock",
        year: "2021",
        description: "Marker on Construction Paper",
        img: <IMG src={SpaceRock} />,
        type: "analog",
    },
    {
        title: "Village Safety",
        year: "2023",
        description: "Sand on Beach",
        img: <IMG src={VillageSafety} />,
        type: "analog",
    },
    {
        title: "The Cave",
        year: "2020",
        description: "Marker on Construction Paper",
        img: <IMG src={Cave} />,
        type: "analog",
    },
    {
        title: "Snow",
        year: "2021",
        description: "Acrylic on Canvas",
        img: <IMG src={Snow} />,
        type: "analog",
    },
    {
        title: "Baby Lupine",
        year: "2021",
        description: "Filmed on iPhone 13 Mini through Minolta XL-400 Super 8 lens",
        video: <VIDEO src='https://crislombardo.com/video/babyLupine.mp4' />,
        type: "video",
    },
    {
        title: "It's All In The Game (Extended)",
        year: "2023",
        description: "Filmed on Minolta XL-400 Super 8",
        video: <YoutubePlayer embedId='VEaXQ_IPCb4?si=dPazIBLcjFxMnnQD' />,
        type: "video",
    },
    // {
    //     title: "Art Piece",
    //     description: "Made with ...",
    //     video: <VIDEO src="https://crislombardo.com/video/babyLupine.mp4"/>,
    // },
];
