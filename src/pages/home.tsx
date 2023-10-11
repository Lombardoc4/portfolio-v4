import { Link } from "react-router-dom";
import {  HorizontalBubbles } from "../components/Bubble";
import WorkPage from "./work";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import { ArtNav } from "./art";
import { ArtTitle } from "../main";


function HomePage() {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end start"]
      })
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.25])

    return (
        <>
            {/* Header */}
            <header
                className='container'
                ref={scrollRef}
                style={{
                    minHeight: "80lvh",
                    // marginBlock: "1rem",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <motion.div
                    style={{
                        position: "absolute",
                        inset: 0,
                        scale: imgScale,
                    }}
                >
                    <motion.img
                        src='/headshot.png'
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            willChange: "transform",
                        }}
                    />
                </motion.div>

                <div style={{ position: "absolute", inset: "2rem", top: "unset", textAlign: "center" }}>
                    <h1>
                        s<span className='pixel'>i</span>rCr<span className='pixel'>i</span>s L
                        <span className='pixel'>o</span>mb<span className='pixel'>a</span>rd
                        <span className='pixel'>o</span>
                    </h1>
                    <h3 className='pixel'>Frontend Developer</h3>
                </div>
            </header>

            <HorizontalBubbles count={1} />

            <div className='container my-1'>
                <p style={{ fontSize: "1.25rem" }}>
                    With 4+ years of professional developer experience, opportunity is around every corner.
                </p>
                <p style={{ fontSize: "1.25rem" }}>
                    Curiousity proves to be one of the greatest tools for leading projects, experimenting with code, and
                    expanding my skills.
                </p>
                <p style={{ fontSize: "1.25rem" }}>
                    I love to ask questions and learn together with a team. Usability, creativity, and discipline put me
                    leaps and bounds along my path.
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

            <HorizontalBubbles count={1} marginClass='my-4' />

            <WorkPage />

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

            <HorizontalBubbles count={1} marginClass="my-4" />

            <div className='container my-1'>
                <div className='my-1'>
                    <h2><ArtTitle/></h2>
                    <p>Art is my sweet release. Unlike code there is no structure, logic, algorithms to follow. </p>
                </div>
            </div>
            <ArtNav />
        </>
    );
}

export default HomePage;
