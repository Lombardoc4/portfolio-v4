import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { StyledHomeHeader, StyledHomeHeaderImgContainer, StyledHomeHeaderCopy, StyledHomeLink } from "../../components/styledComponents/StyledHomePage";

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
                    {/* Todo: Change to Play a game ?  */}
                    {/* <motion.img src='/headshot.png' /> */}
                </StyledHomeHeaderImgContainer>
                <StyledHomeHeaderCopy style={{ opacity: copyOpacity}}>
                    <h1>
                        <span className='pixel'>sir</span>Cris
                        <br />Lombardo
                    </h1>
                    <p>Tasteful websites for people who know the power of going beyond boundariesFRONT-END DEVELOPER SPECIALIZED IN BUILDING &&nbsp;DESIGNING MODERN WEBSITES </p>
                    <StyledHomeLink to='work' className='underline d-inline-block'>view works &rarr;</StyledHomeLink>

                </StyledHomeHeaderCopy>
            </motion.div>
        </StyledHomeHeader>
    );
};