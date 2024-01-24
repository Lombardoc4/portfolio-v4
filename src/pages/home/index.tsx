
import { PhotoHeader } from "./PhotoHeader";
import { AboutAccordians } from "./AboutAccordians";
import { HorizontalBubbles } from "../../components/Bubble";
import { TransitionTitle } from "../../components/TransitionTitle";
import { StyledHomeLink } from "../../components/styledComponents/StyledHomePage";
import { ArtNav } from "../art";
import WorkPage from "../work";

function HomePage() {
    return (
        <>
            <PhotoHeader />

            <AboutAccordians />

            {/* <HorizontalBubbles count={1} marginClass='mt-4' /> */}

            {/* <WorkPage /> */}

            {/* <HorizontalBubbles count={1} marginClass='my-4 mt-2' /> */}

            {/* <NatureSection/> */}

            <HorizontalBubbles count={1} marginClass='my-4' />

            <div className='container'>
                <TransitionTitle title='Art' />

                <ArtNav artPage={false} />

                <p style={{ fontSize: "1.25rem" }}>
                    Art is my sweet release. Unlike code there is no structure, logic, or algorithms to follow.
                </p>
                <StyledHomeLink to='/art'>art &rarr;</StyledHomeLink>
            </div>
        </>
    );
}

export default HomePage;


// const NatureSection = () => {
//     return (
//         <div className='container'>
//             <StyledHomeNature
//                 animate={{ borderColor: ["#FFDB58", "#ba2c2c", "#FFDB58"] }}
//                 transition={{ duration: 16, times: [0, 0.5, 1], repeat: Infinity }}
//             >
//                     <TransitionTitle title='Nature' />
//                     <p style={{ fontSize: "1.25rem" }}>
//                         There is endless pleasure to be found in hiking; native plants, breath-taking views, and making new
//                         friends. My friends and I have been traveling around the US since 2018 and love sharing our
//                         experiences.
//                     </p>
//                 <StyledHomeLink
//                     to='/nature'
//                 >
//                     nature &rarr;
//                 </StyledHomeLink>
//             </StyledHomeNature>
//         </div>
//     );
// }
