import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { StyledHomeHeader, StyledHomeHeaderImgContainer, StyledHomeHeaderCopy } from "../../components/styledComponents/StyledHomePage";

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