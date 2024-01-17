
import { Fragment, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { TransitionTitle } from "../../components/TransitionTitle";
import { Clock } from "../../components/Clock";
import {
    StyledClockContainer,
    StyledWorkPage,
    StyledWorkPageContainer,
} from "../../components/styledComponents/StyledWorkPage";
import { StyledHomeLink } from "../../components/styledComponents/StyledHomePage";
import { SpringBubbles } from "../../components/Bubble";
import { DetailedWorkSection, WorkSection } from "./WorkSection";
import { workLibrary } from "./workLib";



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
                <WorkSection {...work} details={details}/>
                {/* </WorkSection> */}
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

export default WorkPage;
