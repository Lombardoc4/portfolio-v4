import { ImgLinkProps, ImgLink } from "../../components/ImageLink";
import { StyledWorkPageContainer, WorkSegment, WorkSegmentLink } from "../../components/styledComponents/StyledWorkPage";

interface IWorkSection extends ImgLinkProps {
    title: string;
    role: string;
    details: boolean;
    // children?: React.ReactNode;
    description?: string;
}
interface IDetailedWorkSection extends IWorkSection {
    children?: React.ReactNode;
}

export const DetailedWorkSection = (props:  IDetailedWorkSection) => (
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