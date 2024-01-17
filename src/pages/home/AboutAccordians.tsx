import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useRef } from "react";
import { StyledHomeAbout, StyledHomeLink } from "../../components/styledComponents/StyledHomePage";

export const AboutAccordians = () => {
    return (
        <StyledHomeAbout>
            <AboutAccordian style={{ backgroundColor: "rgba(0, 0,0, 0.5)" }}>
                <AboutContent>
                    With 4+ years of professional developer experience, opportunity is around every corner.
                </AboutContent>
            </AboutAccordian>

            <AboutAccordian style={{ backgroundColor: "rgba(0, 0,0, 0.75)" }}>
                <AboutContent style={{ marginLeft: "auto" }}>
                    Curiousity proves to be one of the greatest tools for leading projects, experimenting with code, and
                    expanding my skills.
                </AboutContent>
            </AboutAccordian>

            <AboutAccordian style={{ backgroundColor: "rgba(0, 0,0, 1)" }}>
                <AboutContent>
                    I love to ask questions and learn together with a team. Usability, creativity, and discipline put me
                    leaps and bounds along my path.
                </AboutContent>
            </AboutAccordian>

            <AboutContent style={{ marginInline: "auto", textAlign: "center" }}>
                This is my path as a developer.
                <br />
                <StyledHomeLink to='/about'>
                    about &rarr;
                </StyledHomeLink>
            </AboutContent>
        </StyledHomeAbout>
    );
};

const AboutAccordian = ({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) => {
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

const AboutContent = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
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