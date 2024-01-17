import { HorizontalBubbles } from "../components/Bubble";
<<<<<<< ref
import WorkPage from "./work";
import { PhotoHeader } from "./home";
<<<<<<< 3442e20374e84d166f54c6985e09ce6583222261
=======
<<<<<<< ref
<<<<<<< 5d2e24a5f0d326aa2cdfa640170c43dcc873ebed
=======
<<<<<<< ref
<<<<<<< 6a8d716ec69108655a73221b499dddec74db3c72
=======
<<<<<<< ref
=======
import WorkPage from "./work/index";
import { PhotoHeader } from "./home/PhotoHeader";
>>>>>>> init refactor
>>>>>>> init refactor
>>>>>>> init refactor
>>>>>>> init refactor
// import { StyledHomeLink } from "../styledComponents/StyledHomePage";
<<<<<<< ref
import { StyledAboutContainer } from "../styledComponents/StyledAboutPage";
<<<<<<< 3442e20374e84d166f54c6985e09ce6583222261
=======
=======
>>>>>>> massive update for mobile and desktop styling
<<<<<<< 5d2e24a5f0d326aa2cdfa640170c43dcc873ebed
=======
=======
import { StyledHomeLink } from "../styledComponents/StyledHomePage";
import { StyledAboutContainer } from "../styledComponents/StyledAboutPage";
>>>>>>> final responsive touches with error page attached
=======
import { StyledAboutContainer } from "../components/styledComponents/StyledAboutPage";
>>>>>>> modify file structure
>>>>>>> modify file structure
>>>>>>> modify file structure

function AboutPage() {
    return (
        <>
        {/* <img style={{padding: '1rem'}} src="/headshot.jpg" alt="Cris Lombardo"/>

        <div className='container'>
            <h1>s<span className="pixel">i</span>rCr<span className="pixel">i</span>s L<span className="pixel">o</span>mb<span className="pixel">a</span>rd<span className="pixel">o</span></h1>

            <h2 className="my-1">Fr<span className="pixel">o</span>nt<span className="pixel">e</span>nd D<span className="pixel">e</span>v<span className="pixel">e</span>l<span className="pixel">o</span>p<span className="pixel">e</span>r</h2>
            <h2 className="my-1">N<span className="pixel">a</span>t<span className="pixel">i</span>v<span className="pixel">e</span> Pl<span className="pixel">a</span>nt <span className="pixel">E</span>nth<span className="pixel">u</span>s<span className="pixel">ia</span>st</h2>
            <h2 className="my-1">Dr<span className="pixel">a</span>w<span className="pixel">i</span>ng, P<span className="pixel">ai</span>nt<span className="pixel">i</span>ng, D<span className="pixel">i</span>g<span className="pixel">i</span>t<span className="pixel">a</span>l C<span className="pixel">o</span>ll<span className="pixel">a</span>g<span className="pixel">e</span>, 8mm F<span className="pixel">i</span>lm</h2>
        </div> */}

        <PhotoHeader/>

        <HorizontalBubbles count={1}/>

        <StyledAboutContainer className="container">


            {/* <div className='card'> */}
                <p>With <span className="underline">4+ years</span> of professional developer experience, I have had the opportunity to work with top healthcare professionals such as <span className="underline">Novartis</span> and <span className="underline">Johnson & Johnson</span>, along with a handful of upcoming musicians.</p>
                {/* <p className="my-1">The frontend community is consistently releasing new packages and frameworks here are my go to:</p>
                    <ul>
                        <li>Vite</li>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Google Analytics</li>
                        <li>ChatGPT</li>
                        <li>Github Actions</li>
                        <li>AWS ( S3, Lambda, Amplify )</li>
                    </ul> */}
        </StyledAboutContainer>


        <StyledAboutContainer className="container">



                <p className="mt-1">
                    With any spare time I try to get outside and go hiking, where I can enjoy endless native flora & fauna.
                    Since 2019 I have been nurting a native plant garden at my local library, hoping to spread the knowledge of native plants.
                    As for hiking, I have traveled from
                    <span className="d-block bungee" style={{display: 'flex', justifyContent: 'space-between'}}><span>coast</span><span>to</span><span>coast</span></span>
                    indulging in endless miles of trails.
                </p>
                {/* <StyledHomeLink to='/nature'>NATURE &rarr;</StyledHomeLink> */}
            {/* </div> */}
        </StyledAboutContainer>

        <HorizontalBubbles count={1} />
        <HorizontalBubbles count={1} marginClass="2 mb-1"/>

        <WorkPage/>
        </>
    );
}

export default AboutPage;
