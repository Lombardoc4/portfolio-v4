import { Link } from "react-router-dom";
import { Bubble, HorizontalBubbles, SpringBubbles, VerticalBubbles } from "../components/Bubble";
import { AnalogTitle, DigitalTitle, VideoTitle } from "../main";
import WorkPage from "./work";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import { ArtNav } from "./art";


function HomePage() {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end start"]
      })
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.25])

    return (
        <>
            <div
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
            </div>

            <HorizontalBubbles count={1} />

            <div className='container my-1'>
                <div className='my-1'>
                    <p style={{ fontSize: "1.5rem", textAlign: "justify" }}>
                        With <span className='underline'>4+ years</span> of professional developer experience, I have
                        had the opportunity to work with top healthcare professionals such as{" "}
                        <span className='underline'>Novartis</span> and{" "}
                        <span className='underline'>Johnson & Johnson</span>, along with a handful of upcoming
                        musicians.
                    </p>
                    <button className='my-1'>
                        <Link to='/'>About</Link>
                    </button>
                </div>
            </div>

            {/* <Link className="h1 bungee container" to='/'>Work</Link> */}

            <WorkPage />

            <HorizontalBubbles count={1} />

            <div className='container my-1'>
                <h3>Recreations</h3>
                <p>Hiking is cool, I've gone on road trips to the west us, Adventuring with friends and solo</p>
                <Link to='/'>Rec</Link>
            </div>

            <HorizontalBubbles count={1} />

            <div className='container my-1'>
                <div className='my-1'>
                    <h3>Art</h3>
                    <p>Hiking is cool, I've gone on road trips to the west us, Adventuring with friends and solo</p>

                </div>
            </div>
            <ArtNav/>


            <div style={{ maxWidth: "1200px", overflow: "hidden", position: "relative" }}>
                <Bubble
                    img='/headshot.jpg'
                    title="C'est Moi"
                    link='/about'
                    position={{ left: "52%", top: "20%" }}
                    size={{ width: "50vw", height: "50vw" }}
                />
                <Bubble
                    img='/digi-art.png'
                    title={<DigitalTitle />}
                    link='/art/digital'
                    position={{ left: "-10%", top: "57%" }}
                    size={{ width: "48vw", height: "48vw" }}
                />
                <Bubble
                    img='/travel.jpg'
                    title='Nature'
                    link='/nature'
                    position={{ left: "52%", top: "46%" }}
                    size={{ width: "60vw", height: "60vw" }}
                />

                <Bubble
                    img='/analog-art.png'
                    title={<AnalogTitle />}
                    link='/art/analog'
                    position={{ left: "30%", top: "74%" }}
                    size={{ width: "32vw", height: "32vw" }}
                />
                <Bubble
                    img='/video.png'
                    title={<VideoTitle />}
                    link='/art/video'
                    position={{ left: "68%", top: "70%" }}
                    size={{ width: "28vw", height: "28vw" }}
                />
                <Bubble
                    img='/sites.png'
                    title='Work'
                    link='/work'
                    position={{ left: "-10%", top: "24%" }}
                    size={{ width: "64vw", height: "64vw" }}
                />
            </div>
        </>
    );
}

export default HomePage;
