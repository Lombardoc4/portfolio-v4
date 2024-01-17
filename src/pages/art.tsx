import { Outlet } from "react-router-dom";

<<<<<<< ref
import { IArtPiece, artLibrary } from "../artLibrary";
<<<<<<< 2a3a6540c1aa106841fbe78f952c3e32d534ce0f
=======
<<<<<<< refactor
<<<<<<< 94f7ad83ba0f29f9addff2df421c651c3e2060e9
=======
<<<<<<< refactor
<<<<<<< refactor
>>>>>>> massive update for mobile and desktop styling
=======
import { SpringBubbles } from "../components/Bubble";
>>>>>>> remove typescript errors
>>>>>>> massive update for mobile and desktop styling
import { Fragment } from "react";
=======
<<<<<<< 3442e20374e84d166f54c6985e09ce6583222261
=======
=======
import { Outlet } from "react-router-dom";
import { AnalogTitle, ArtTitle, DigitalTitle, VideoTitle } from "../main";
import { IArtPiece, artLibrary } from "../artLibrary";
>>>>>>> massive update for mobile and desktop styling
=======
import { IArtPiece, ARTLIBRARY } from "../artLibrary";
>>>>>>> init refactor
>>>>>>> init refactor
import { Fragment, useEffect, useRef, useState } from "react";
import { StyledArtNav, StyledArtNavLink, StyledArtPiece, StyledArtPieceAsset } from "../components/styledComponents/StyledArtPage";
import { TransitionTitle } from "../components/TransitionTitle";
import { motion, useScroll, useTransform } from "framer-motion";
>>>>>>> massive update for mobile and desktop styling


const AnalogTitle = () => <><span className='pixel'>A</span>n<span className='pixel'>a</span>l<span className='pixel'>o</span>g</>
const ArtTitle = () => <><span className='pixel'>A</span>rt</>
const DigitalTitle = () => <>D<span className='pixel'>i</span>g<span className='pixel'>i</span>t<span className='pixel'>a</span>l</>
const VideoTitle = () => <>V<span className='pixel'>i</span>d<span className='pixel'>eo</span></>


export const ArtLayout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

function ArtPage() {
    return (
        <div className='container my-2'>
            <TransitionTitle title='Art' />
            {/* <p>A random shuffle of my art</p> */}

            <ArtNav />

            {ARTLIBRARY.map((artPiece: IArtPiece) => (
                <Fragment key={artPiece.title}>
                    <ArtPiece {...artPiece} />
                </Fragment>
            ))}
        </div>
    );
}

export default ArtPage;

export const ArtNav = ({ artPage = true }: { artPage?: boolean }) => {
    const navLinks = [
        <ArtNavCard link='/art/analog' img='/analog-art.png' title={<AnalogTitle />} />,
        <ArtNavCard link='/art/digital' img='/digi-art.png' title={<DigitalTitle />} />,
        <ArtNavCard link='/art/video' img='/video.png' title={<VideoTitle />} />,
    ];

    return (
        <StyledArtNav $artPage={artPage}>
            {navLinks.map((link, i) => {
                return artPage ? (
                    <AnimatedArtNavCard key={"artNav" + i}>{link}</AnimatedArtNavCard>
                ) : (
                    <Fragment key={"artNav" + i}>{link}</Fragment>
                );
            })}
        </StyledArtNav>
    );
};

function AnimatedArtNavCard({ children }: { children: React.ReactNode }) {
    const NavCardRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const cardHeight = useTransform(scrollYProgress, [0, 0.025], [300, 100]);

    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return children;
    }

    return (
        <motion.div
            ref={NavCardRef}
            style={{
                height: cardHeight,
            }}
        >
            {children}
        </motion.div>
    );
}

interface IArtCard {
    link: string;
    img: string;
    title?: JSX.Element;
}

function ArtNavCard({ link, img, title }: IArtCard) {
    return (
        <StyledArtNavLink
            reloadDocument
            to={link}
            className='art-card'
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <h3 className='title'>{title}</h3>
        </StyledArtNavLink>
    );
}

export const GalleryPage = ({ type }: { type: "digital" | "analog" | "video" }) => {
    const art = ARTLIBRARY.filter((art) => art.type === type);

    return (
        <div className='container mt-2'>
            <ArtNav />

            <h1>
                {type === "analog" && <AnalogTitle />}
                {type === "digital" && <DigitalTitle />}
                {type === "video" && <VideoTitle />}
                {type !== "video" && (
                    <>
                        {" "}
                        <ArtTitle />
                    </>
                )}
            </h1>

            {type === "analog" && <p>Drawings, paintings, and collages</p>}
            {type === "digital" && <p>Digital collages and photo edits</p>}
            {type === "video" && <p>8mm film, that real vintage field</p>}

            {art.map((artPiece: IArtPiece) => (
                <Fragment key={artPiece.title}>
                    <ArtPiece {...artPiece} />
                </Fragment>
            ))}
        </div>
    );
};

const ArtPiece = ({ title, year, description, img, video }: IArtPiece) => {
    return (
        <StyledArtPiece className='segment'>
            <StyledArtPieceAsset>
                {img}
                {video}
            </StyledArtPieceAsset>

            <div className='title'>
                <h2>{title}</h2>

                <div className='mt-1'>
                    {year && <p>{year}</p>}
                    <p>{description}</p>
                </div>
            </div>
        </StyledArtPiece>
    );
};
