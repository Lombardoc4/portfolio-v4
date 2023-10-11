import { Link } from "react-router-dom";

import DEM from "../assets/dem.png";
import DryEye from "../assets/dry-eye-july.png";
import NPExplorer from "../assets/np-explorer.png";
import Pacer from "../assets/pacer.png";
import PropPulse from "../assets/propeller-pulse.png";
import Techtonic from "../assets/techtonic.png";
import { Fragment, useRef } from "react";
import { SpringBubbles } from "../components/Bubble";
import { motion, useScroll, useTransform } from "framer-motion";

const workLibrary = [
    {
        title: "National Park Explorer",
        role: "Frontend",
        link: "http://np-explorer.s3-website-us-east-1.amazonaws.com/",
        img: NPExplorer,
        description:
            "A modern take on US National Parks, utlizing the National Parks and National Weather APIs, to help plan for your next trip",
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

function WorkPage({details = false} : {details?: boolean}) {
    return (
        <div className='container'>
            {/* <h1>Work</h1> */}
            <Link to="/work" className="h1 bungee" style={{color: 'var(--color-primary)', fontSize: '5rem', marginTop: '2rem'}}>
                <motion.span
                  initial={{ opacity: 0, y: '100%' }}
                  whileInView={{ opacity: 1, y: '0' }}
                  transition={{
                    ease: "linear",
                  }}
            >
                W
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: '100%' }}
                  whileInView={{ opacity: 1, y: '0' }}
                  transition={{
                    ease: "linear",
                    delay: 0.1
                  }}
            >
                O
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: '100%' }}
                  whileInView={{ opacity: 1, y: '0' }}
                  transition={{
                    ease: "linear",
                    delay: 0.2

                  }}
            >
                R
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: '100%' }}
                  whileInView={{ opacity: 1, y: '0' }}
                  transition={{
                    ease: "linear",
                    delay: 0.3

                  }}
            >
                K
                </motion.span>
            </Link>

            {workLibrary.map((work, i) => {
                return (
                    <Fragment key={work.title}>
                        <WorkSection {...work} details={details} />
                        {i !== workLibrary.length - 1 && <div className="mt-1"><SpringBubbles /></div>}
                    </Fragment>
                );
            })}
        </div>
    );
}

interface IWorkSection {
    img?: string;
    title: string;
    role: string;
    link: string;
    details: boolean
    description?: string;
}

const WorkSection = ({ img, title, role, link, description, details }: IWorkSection) => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'center 0.66']
      })
    const imgYTranslate = useTransform(scrollYProgress, [0, 1], [100, 0])

    return (
        <>
            <div className='segment'
            >
                {details && (
                <motion.div style={{
                    opacity: scrollYProgress,
                }}>

                    <Link target='_blank' to={link}
                    ref={sectionRef}
                    style={{
                        border: "1px solid var(--color-secondary)",
                        padding: '2rem 1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'linear-gradient(to bottom, var(--color-primary) 66%, var(--color-primary-accent))',
                        overflow: 'hidden',
                    }}>
                        <motion.img
                            style={{
                                borderRadius: 'var(--radius-sm)',
                                boxShadow: '0 0 2rem -0.5rem var(--color-secondary)',
                                translateY: imgYTranslate,
                            }}
                            src={img}
                            />
                    </Link>
                            </motion.div>
                )}
                <Link target='_blank' to={link} style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <h2>{title}</h2>
                        <p className='pixel' style={{ fontSize: "1.25rem" }}>
                            {role}
                        </p>
                    </div>
                    <p style={{ fontSize: "3rem", lineHeight: 1 }}>
                        &#8514;
                        {/* &#10548; */}
                    </p>
                </Link>

                {details && description}
            </div>
        </>
    );
};

export default WorkPage;
