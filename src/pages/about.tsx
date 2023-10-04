import { Link } from "react-router-dom";
import { HorizontalBubbles } from "../components/Bubble";
import WorkPage from "./work";

function AboutPage() {
    return (
        <>
        <img style={{padding: '1rem'}} src="/headshot.jpg" alt="Cris Lombardo"/>

        <div className='container'>
            <h1>s<span className="pixel">i</span>rCr<span className="pixel">i</span>s L<span className="pixel">o</span>mb<span className="pixel">a</span>rd<span className="pixel">o</span></h1>

            <h2 className="my-1">Fr<span className="pixel">o</span>nt<span className="pixel">e</span>nd D<span className="pixel">e</span>v<span className="pixel">e</span>l<span className="pixel">o</span>p<span className="pixel">e</span>r</h2>
            <h2 className="my-1">N<span className="pixel">a</span>t<span className="pixel">i</span>v<span className="pixel">e</span> Pl<span className="pixel">a</span>nt <span className="pixel">E</span>nth<span className="pixel">u</span>s<span className="pixel">ia</span>st</h2>
            <h2 className="my-1">Dr<span className="pixel">a</span>w<span className="pixel">i</span>ng, P<span className="pixel">ai</span>nt<span className="pixel">i</span>ng, D<span className="pixel">i</span>g<span className="pixel">i</span>t<span className="pixel">a</span>l C<span className="pixel">o</span>ll<span className="pixel">a</span>g<span className="pixel">e</span>, 8mm F<span className="pixel">i</span>lm</h2>
        </div>


        <div className="container">

            {/* <div className='card'> */}
                <p>With <span className="underline">4+ years</span> of professional developer experience, I have had the opportunity to work with top healthcare professionals such as <span className="underline">Novartis</span> and <span className="underline">Johnson & Johnson</span>, along with a handful of upcoming musicians.</p>
                <p className="my-1">The frontend community is consistently releasing new packages and frameworks here are my <span className="underline">go to</span>:</p>
                    <ul>
                        <li>Vite</li>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Google Analytics</li>
                        <li>ChatGPT</li>
                        <li>Github Actions</li>
                        <li>AWS ( S3, Lambda, Amplify )</li>
                    </ul>

                <p className="mt-1">
                    With any spare time I try to get outside and go hiking, where I can enjoy endless native flora & fauna.
                    Since 2019 I have been nurting a native plant garden at my local library, hoping to spread the knowledge of native plants.
                    As for hiking, I have traveled from
                    <span className="d-block bungee" style={{display: 'flex', justifyContent: 'space-between'}}><span>coast</span><span>to</span><span>coast</span></span>
                    indulging in endless miles of trails.
                </p>
                <Link to='/nature' className="underline d-block" style={{textAlign: 'right', fontSize: '2rem', transform: 'skewX(-15deg)'}}>NATURE &rarr;</Link>
            {/* </div> */}
        </div>

        <div className="my-1" style={{marginTop: '2rem'}}>
            <HorizontalBubbles count={3}/>
        </div>

        <WorkPage/>
        </>
    );
}

export default AboutPage;
