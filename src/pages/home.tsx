import { Link } from "react-router-dom";
import { HorizontalBubbles } from "../components/Bubble";
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
    StyledHomeNature,
} from "../styledComponents/StyledHomePage";

function HomePage() {
    return (
        <>


            {/* Header */}
            <PhotoHeader />

            <AllAboutSections />

            <HorizontalBubbles count={1} marginClass='mt-4' />

            <WorkPage />


            {/* <HorizontalBubbles count={1} marginClass='my-4 mt-2' /> */}

            {/* Nature */}
            {/* <NatureSection/> */}

            <HorizontalBubbles count={1} marginClass='my-4' />


            {/* Art */}
                <div className='container'>

                    <TransitionTitle title='Art' />

                    <ArtNav artPage={false} />

                    <p style={{ fontSize: "1.25rem" }}>
                        Art is my sweet release. Unlike code there is no structure, logic, or algorithms to follow.
                    </p>
                    <Link
                        to='/art'
                        className='underline d-inline-block my-1'
                        style={{ fontSize: "1.5rem", transform: "skewX(-15deg)" }}
                    >
                        art &rarr;
                    </Link>
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
                </AboutCopy>
            </AboutSection>

            <AboutSection style={{ backgroundColor: "rgba(0, 0,0, 0.75)" }}>
                <AboutCopy style={{ marginLeft: "auto" }}>
                    Curiousity proves to be one of the greatest tools for leading projects, experimenting with code, and
                    expanding my skills.
                </AboutCopy>
            </AboutSection>

            <AboutSection style={{ backgroundColor: "rgba(0, 0,0, 1)" }}>
                <AboutCopy>
                    I love to ask questions and learn together with a team. Usability, creativity, and discipline put me
                    leaps and bounds along my path.
                </AboutCopy>
            </AboutSection>

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

    useMotionValueEvent(scrollY, "change", (latest) => {
        const isDown = scrollY.getPrevious() - latest < 0;
        if (scrollRef.current) {
            scrollRef.current.style.transformOrigin = isDown ? "top" : "bottom";
        }
    });

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
    );
};

const NatureSection = () => {
    return (
        <div className='container'>
            <StyledHomeNature
                animate={{ borderColor: ["#FFDB58", "#ba2c2c", "#FFDB58"] }}
                transition={{ duration: 16, times: [0, 0.5, 1], repeat: Infinity }}
            >
                    <TransitionTitle title='Nature' />
                    <p style={{ fontSize: "1.25rem" }}>
                        There is endless pleasure to be found in hiking; native plants, breath-taking views, and making new
                        friends. My friends and I have been traveling around the US since 2018 and love sharing our
                        experiences.
                    </p>
                <StyledHomeLink
                    to='/nature'
                >
                    nature &rarr;
                </StyledHomeLink>
            </StyledHomeNature>
        </div>
    );
}
