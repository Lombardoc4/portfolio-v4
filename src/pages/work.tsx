
import DEM from "../assets/dem.png";
import DryEye from "../assets/dry-eye-july.png";
import NPExplorer from "../assets/np-explorer.png";
import Pacer from "../assets/pacer.png";
import PropPulse from "../assets/propeller-pulse.png";
import Techtonic from "../assets/techtonic.png";
import { Fragment, useRef } from "react";
import { SpringBubbles } from "../components/Bubble";
import { motion, useScroll, useTransform } from "framer-motion";
import { TransitionTitle } from "../components/TransitionTitle";
import { Clock } from "../components/Clock";
import {
    StyledClockContainer,
    StyledImgLink,
    StyledWorkPage,
    StyledWorkPageContainer,
    WorkSegment,
    WorkSegmentLink,
} from "../styledComponents/StyledWorkPage";
import { StyledHomeLink } from "../styledComponents/StyledHomePage";

export const workLibrary = [
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


function WorkPage({ details = false }: { details?: boolean }) {
    const workSection = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: workSection,
        offset: ['start end', 'end start']
    });
    const clockOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.25, 0.25, 0])

    return (
        <StyledWorkPage className='container' ref={workSection}>
            <StyledClockContainer style={{ opacity: clockOpacity }}>
                <Clock />
            </StyledClockContainer>

            <TransitionTitle title='Work' className="mt-2" />


            {details ? (
                <AllWorkSections details={details} />
            ) : (
                <>
                <StyledHomeLink to='work' className='underline d-inline-block'>all &rarr;</StyledHomeLink>
                <StyledWorkPageContainer>
                    <AllWorkSections />
                </StyledWorkPageContainer>

                </>
            )}
        </StyledWorkPage>
    );
}

interface ImgLinkProps {
    img: string;
    link: string;
}

interface IWorkSection extends ImgLinkProps {
    title: string;
    role: string;
    details: boolean;
    children: React.ReactNode;
    description?: string;
}

const AllWorkSections = ({details = false }: {details?: boolean}) => {
    return workLibrary.map((work, i) => (
        <Fragment key={work.title}>
            {details ? (
                <DetailedWorkSection {...work} details={details}>
                    {i !== workLibrary.length - 1 && (
                        <div className="work-container">
                            <SpringBubbles />
                        </div>
                    )}
                </DetailedWorkSection>
            ) : (
                <>
                <WorkSection {...work} details={details}>
                </WorkSection>
                    {i !== workLibrary.length - 1 && (
                        <div className="work-container">
                            <SpringBubbles />
                        </div>
                    )}
                </>
            )}
        </Fragment>
    ));
}

const DetailedWorkSection = (props: IWorkSection) => (
    <div className="work-container">
        <StyledWorkPageContainer>
            <WorkSection {...props}/>
        </StyledWorkPageContainer>
        {props.children}
    </div>
)


export const WorkSection = ({ img, title, role, link, description, details }: IWorkSection) => {
    return (
            <WorkSegment className='segment'>
                {details && <ImgLink img={img} link={link} />}
                <div className='main-copy w-100'>
                    <WorkSegmentLink target='_blank' to={link}>
                        <div>
                            <h2>{title}</h2>
                            <p className='pixel'>{role}</p>
                        </div>

                        {!details && <p className='symbol'>&#8514;</p>}
                    </WorkSegmentLink>

                    {details && description}
                </div>
            </WorkSegment>
    );
};

const ImgLink = ({ img, link }: ImgLinkProps) => {
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

export default WorkPage;
