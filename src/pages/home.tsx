<<<<<<< ref
import { Link } from "react-router-dom";
<<<<<<< 2a3a6540c1aa106841fbe78f952c3e32d534ce0f
import {  HorizontalBubbles } from "../components/Bubble";
=======
<<<<<<< refactor
<<<<<<< 94f7ad83ba0f29f9addff2df421c651c3e2060e9
=======
<<<<<<< refactor
<<<<<<< refactor
>>>>>>> massive update for mobile and desktop styling
import {  HorizontalBubbles } from "../components/Bubble";
=======
import { Bubble, HorizontalBubbles } from "../components/Bubble";
import { AnalogTitle, DigitalTitle, VideoTitle } from "../main";
>>>>>>> remove typescript errors
<<<<<<< 94f7ad83ba0f29f9addff2df421c651c3e2060e9
=======
=======
import {  HorizontalBubbles } from "../components/Bubble";
>>>>>>> contact form cors
=======
=======
// import { Link } from "react-router-dom";
>>>>>>> correct clock animation ease
import { HorizontalBubbles } from "../components/Bubble";
>>>>>>> massive update for mobile and desktop styling
>>>>>>> massive update for mobile and desktop styling
>>>>>>> massive update for mobile and desktop styling
import WorkPage from "./work";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArtNav } from "./art";
import { TransitionTitle } from "../components/TransitionTitle";
import {
    StyledHomeAbout,
    StyledHomeHeader,
    StyledHomeHeaderCopy,
    StyledHomeHeaderImgContainer,
    StyledHomeLink,
    // StyledHomeNature,
} from "../styledComponents/StyledHomePage";
<<<<<<< 5532f426d62f724c3b20896f5b3e3b31b9a8e7ad
=======
=======
import { ArtTitle } from "../main";

>>>>>>> contact form cors
<<<<<<< 3442e20374e84d166f54c6985e09ce6583222261
=======
=======
    StyledHomeNature,
<<<<<<< 6a8d716ec69108655a73221b499dddec74db3c72
=======
=======
    // StyledHomeNature,
<<<<<<< ref
>>>>>>> resolving ts errors
>>>>>>> modify file structure
} from "../styledComponents/StyledHomePage";
>>>>>>> massive update for mobile and desktop styling
=======
} from "../components/styledComponents/StyledHomePage";
>>>>>>> modify file structure
>>>>>>> modify file structure
>>>>>>> modify file structure

function HomePage() {
    return (
        <>
            <PhotoHeader />

            <AllAboutSections />

            <HorizontalBubbles count={1} marginClass='mt-4' />

            <WorkPage />

            {/* <HorizontalBubbles count={1} marginClass='my-4 mt-2' /> */}

            {/* <NatureSection/> */}

            <HorizontalBubbles count={1} marginClass='my-4' />

            <div className='container'>
                <TransitionTitle title='Art' />

                <ArtNav artPage={false} />

                <p style={{ fontSize: "1.25rem" }}>
                    Art is my sweet release. Unlike code there is no structure, logic, or algorithms to follow.
                </p>
                <StyledHomeLink to='/art'>art &rarr;</StyledHomeLink>
            </div>
        </>
    );
}

export default HomePage;

export const PhotoHeader = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end start"],
    });

    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
    const copyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <StyledHomeHeader ref={scrollRef}>
            <motion.div className='container' style={{ scale: imgScale }}>
                <StyledHomeHeaderImgContainer >
                    <motion.img src='/headshot.png' />
                </StyledHomeHeaderImgContainer>
                <StyledHomeHeaderCopy style={{ opacity: copyOpacity}}>
                    <h1>
                        s<span className='pixel'>i</span>rCr<span className='pixel'>i</span>s
                        <br />L<span className='pixel'>o</span>mb<span className='pixel'>a</span>rd
                        <span className='pixel'>o</span>
                    </h1>

                    <h3 className='pixel'>Frontend Developer</h3>
                </StyledHomeHeaderCopy>
            </motion.div>
        </StyledHomeHeader>
    );
};

const AllAboutSections = () => {
    return (
        <StyledHomeAbout>
            <AboutSection style={{ backgroundColor: "rgba(0, 0,0, 0.5)" }}>
                <AboutCopy>
                    With 4+ years of professional developer experience, opportunity is around every corner.
<<<<<<< refactor
                </p>
                <p style={{ fontSize: "1.25rem" }}>
<<<<<<< fd97f4e29896c6d52084b789e4b24c7d895aa38f
=======
<<<<<<< refactor
<<<<<<< 94f7ad83ba0f29f9addff2df421c651c3e2060e9
=======
<<<<<<< refactor
=======
                </AboutCopy>
            </AboutSection>

            <AboutSection style={{ backgroundColor: "rgba(0, 0,0, 0.75)" }}>
                <AboutCopy style={{ marginLeft: "auto" }}>
>>>>>>> massive update for mobile and desktop styling
>>>>>>> massive update for mobile and desktop styling
>>>>>>> massive update for mobile and desktop styling
                    Curiousity proves to be one of the greatest tools for leading projects, experimenting with code, and
                    expanding my skills.
                </AboutCopy>
            </AboutSection>

            <AboutSection style={{ backgroundColor: "rgba(0, 0,0, 1)" }}>
                <AboutCopy>
                    I love to ask questions and learn together with a team. Usability, creativity, and discipline put me
                    leaps and bounds along my path.
<<<<<<< refactor
                </p>
                <p style={{ fontSize: "1.25rem" }}>This is my path as a developer.</p>
                <Link
                    to='/about'
                    className='underline d-block my-1'
                    style={{ textAlign: "right", fontSize: "2rem", transform: "skewX(-15deg)" }}
                >
                    ABOUT &rarr;
                </Link>
            </div>
=======
                </AboutCopy>
            </AboutSection>
>>>>>>> massive update for mobile and desktop styling

            <AboutCopy style={{ marginInline: "auto", textAlign: "center" }}>
                This is my path as a developer.
                <br />
                <StyledHomeLink to='/about'>
                    about &rarr;
                </StyledHomeLink>
            </AboutCopy>
        </StyledHomeAbout>
    );
};

const AboutSection = ({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

<<<<<<< refactor
            <HorizontalBubbles count={1} marginClass="my-4" />

            <div className='container my-1'>
                <h2>Recreations</h2>
                <p>
                    There is endless pleasure to be found in hiking; native plants, breath-taking views, and making new
                    friends. My friends and I have been traveling around the US since 2018 and love sharing our
                    experiences.
                </p>
                <Link to='/'>Rec</Link>
                <Link
                    to='/nature'
                    className='underline d-block my-1'
                    style={{ textAlign: "right", fontSize: "2rem", transform: "skewX(-15deg)" }}
                >
                    NATURE &rarr;
                </Link>
            </div>
=======
    useMotionValueEvent(scrollY, "change", (latest) => {
        const isDown = scrollY.getPrevious() - latest < 0;
        if (scrollRef.current) {
            scrollRef.current.style.transformOrigin = isDown ? "top" : "bottom";
        }
    });
>>>>>>> massive update for mobile and desktop styling

    return (
        <motion.div
            ref={scrollRef}
            style={style}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

<<<<<<< refactor
            <div className='container my-1'>
                <div className='my-1'>
                    <h2><ArtTitle/></h2>
                    <p>Art is my sweet release. Unlike code there is no structure, logic, algorithms to follow. </p>
                </div>
            </div>
            <ArtNav />
        </>
=======
const AboutCopy = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
    return (
        <motion.div className='container'>
            <motion.p
                style={style}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
            >
                {children}
            </motion.p>
        </motion.div>
>>>>>>> massive update for mobile and desktop styling
    );
};

// const NatureSection = () => {
//     return (
//         <div className='container'>
//             <StyledHomeNature
//                 animate={{ borderColor: ["#FFDB58", "#ba2c2c", "#FFDB58"] }}
//                 transition={{ duration: 16, times: [0, 0.5, 1], repeat: Infinity }}
//             >
//                     <TransitionTitle title='Nature' />
//                     <p style={{ fontSize: "1.25rem" }}>
//                         There is endless pleasure to be found in hiking; native plants, breath-taking views, and making new
//                         friends. My friends and I have been traveling around the US since 2018 and love sharing our
//                         experiences.
//                     </p>
//                 <StyledHomeLink
//                     to='/nature'
//                 >
//                     nature &rarr;
//                 </StyledHomeLink>
//             </StyledHomeNature>
//         </div>
//     );
// }
