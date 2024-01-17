import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { StyledImgLink } from "./styledComponents/StyledWorkPage";

export interface ImgLinkProps {
    img: string;
    link: string;
}

export const ImgLink = ({ img, link }: ImgLinkProps) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center 0.66"],
    });
    const imgYTranslate = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <motion.div
            style={{
                opacity: scrollYProgress,
                flex: 3,
            }}
        >
            <StyledImgLink target='_blank' to={link} ref={sectionRef}>
                <motion.img
                    style={{
                        translateY: imgYTranslate,
                    }}
                    src={img}
                />
            </StyledImgLink>
        </motion.div>
    );
};