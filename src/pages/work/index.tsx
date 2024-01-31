
import { Fragment, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { TransitionTitle } from "../../components/TransitionTitle";
import { Clock, DigitalClock } from "../../components/Clock";
import {
    StyledClockContainer,
    StyledWorkPage,
    // StyledWorkPageContainer,
} from "../../components/styledComponents/StyledWorkPage";
// import { StyledHomeLink } from "../../components/styledComponents/StyledHomePage";
import { SpringBubbles } from "../../components/Bubble";
import { DetailedWorkSection } from "./WorkSection";
import { workLibrary } from "./workLib";



const AllWorkSections = ({details = false }: {details?: boolean}) => {
    return workLibrary.map((work, i) => (
        <Fragment key={work.title}>
                <DetailedWorkSection {...work} details={details}>
                    {i !== workLibrary.length - 1 && (
                        <div className="work-container">
                            <SpringBubbles />
                        </div>
                    )}
                </DetailedWorkSection>

        </Fragment>
    ));
}

function WorkPage({ details = false }: { details?: boolean }) {
    const workSection = useRef<HTMLDivElement>(null)
    const [showClock, setShowClock] = useState(false);

    const { scrollYProgress } = useScroll({
        target: workSection,
        offset: ['start end', 'end start']
    });

    const clockOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.25, 0.25, 0])

    return (
        <StyledWorkPage className='container' ref={workSection}>
            <StyledClockContainer style={{ opacity: clockOpacity }} onMouseEnter={() => setShowClock(true)} onMouseLeave={() => setShowClock(false)}>
                <Clock  />
                {showClock && <DigitalClock/>}
            </StyledClockContainer>

            <TransitionTitle title='Work' className="mt-2" />

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem 2rem', marginBlock: '4rem'}}>

            <AllWorkSections details={details} />
            </div>
            {/* {details ? (
                <AllWorkSections details={details} />
            ) : (
                <>
                <StyledHomeLink to='work' className='underline d-inline-block'>all &rarr;</StyledHomeLink>
                <StyledWorkPageContainer>
                    <AllWorkSections />
                </StyledWorkPageContainer>

                </>
            )} */}
        </StyledWorkPage>
    );
}

export default WorkPage;
