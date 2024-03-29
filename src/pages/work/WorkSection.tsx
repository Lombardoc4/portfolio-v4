import React from "react";
import { StyledWorkPageContainer, WorkSegment, WorkSegmentLink } from "../../components/styledComponents/StyledWorkPage";
import { ImgLinkProps, ImgLink } from "../../components/ImageLink";


interface IWorkSection extends ImgLinkProps {
    title: string;
    role: string;
    details: boolean;
    // children?: React.ReactNode;
    description?: React.ReactNode;
}

interface IDetailedWorkSection extends IWorkSection {
    children?: React.ReactNode;
}

export const DetailedWorkSection = (props:  IDetailedWorkSection) => (
    <div className="work-container">
        <StyledWorkPageContainer>
            <WorkSection {...props}/>
        </StyledWorkPageContainer>
        {/* {props.children} */}
    </div>
)


export const WorkSection = ({ img,
    title,
    // role,
    link,
    // description,
    // details
}: IWorkSection) => {
    return (
        <WorkSegment className='segment'>
            <ImgLink img={img} link={link} />
            <div className='main-copy w-100'>
                <WorkSegmentLink target='_blank' to={link}>
                    <div>
                        <h2>{title}</h2>
                        {/* <p className='pixel'>{role}</p> */}
                    </div>
                </WorkSegmentLink>

                {/* {details && description} */}
            </div>
        </WorkSegment>
    );
};