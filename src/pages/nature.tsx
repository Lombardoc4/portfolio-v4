import { useState } from "react";
import { StyledArtPiece, StyledArtPieceAsset } from "../styledComponents/StyledArtPage";
import { TransitionTitle } from "../components/TransitionTitle";
import { HorizontalBubbles } from "../components/Bubble";

export const NaturePage = () => {
    return (
        <>
            <div className='container my-2'>
                <TransitionTitle title='Nature' />

                <p>Hiking is cool, I've gone on road trips to the west us, Adventuring with friends and solo</p>
            </div>

            <HorizontalBubbles count={1}/>

            <NatureSection
                img='./travel.jpg'
                title='Road Trip 2022'
                subtitle='Solo'
                description='First time on a solo adventure across the country, plenty of stops planned along the way'
            >
                <NatureSubSection title='Page, Arizona' img='./travel.jpg'>
                    <p>Lake Powell, Lee's Ferry, check photos</p>
                </NatureSubSection>

                <NatureSubSection title='SLC - Antelope Island' img='./travel.jpg'>
                    <p>Hiking, secret beer spot, old friend</p>
                </NatureSubSection>

                <NatureSubSection title='Twin Falls, Idaho' img='./travel.jpg'>
                    <p>Secret Treasure of America, Niagra Walls of the West. Burger Spot & Disc Golf</p>
                </NatureSubSection>

                <NatureSubSection title='Page, Arizona' img='./travel.jpg'>
                    <p>Lake Powell, Lee's Ferry, check photos</p>
                </NatureSubSection>

                <NatureSubSection title='Shout outs'>
                    <p>Tacoma, Washington (Reminded me of home)</p>
                    <p>Butterfly Wonderland, Scotsdale Arizona</p>
                </NatureSubSection>
            </NatureSection>

            <NatureSection
                img='./travel.jpg'
                title='Road Trip v1 2021'
                subtitle='Best Friends'
                description='The year of the custom van'
            >
                <NatureSubSection title='Sand Dunes... in Colorado?' img='./travel.jpg'>
                    <p>Great Sand Dunes</p>
                </NatureSubSection>

                <NatureSubSection title='Man vs Wind' img='./travel.jpg'>
                    <p>Twin Lakes, el boate</p>
                </NatureSubSection>

                <NatureSubSection title='Shout outs'>
                    <p>Tacoma, Washington (Reminded me of home)</p>
                    <p>Butterfly Wonderland, Scotsdale Arizona</p>
                </NatureSubSection>
            </NatureSection>

            <NatureSection
                img='./travel.jpg'
                title='Road Trip v2 2021'
                subtitle='Someone from a past life'
                description='Driving my own car to Colorado'
            >
                <NatureSubSection title='Intro to Fruita' img='./travel.jpg'>
                    <p>Granela Pass & Altitude Sickness</p>
                </NatureSubSection>

                <NatureSubSection title='Denver Botanical Garden' img='./travel.jpg'>
                    <p>Feeling fancy and handsome??</p>
                </NatureSubSection>

                <NatureSubSection title='Shout outs'>
                    <p>Grand Mesa, Craigs Crest</p>
                </NatureSubSection>
            </NatureSection>

            <NatureSection
                img='./travel.jpg'
                title='Road Trip v1 2020'
                subtitle='The Gang, 5 total'
                description='It\s official, we got the passenger van'
            >
                <NatureSubSection title='The Antifa Picnic' img='./travel.jpg'>
                    <p>It seemed like a cataclismic event from outside. Capital Hill became a big picnic</p>
                    <p>There is some value lost in this as minorities were scarely seen and even questioning why it was necessary at all</p>
                </NatureSubSection>

                <NatureSubSection title='The Split' img='./travel.jpg'>
                    <p>Halfway into the trip, two of my friends split and rented a sepeate car for their travels to Big Sur</p>
                    <p>With the gang cut in half, it was much quieter and roomy in the van</p>
                </NatureSubSection>

                <NatureSubSection title='The God Dam - A Meditation in Nature' img='./travel.jpg'>
                    <p>The group I stayed with made a dam. Where? No one will ever know, not even us</p>
                    <p>We felt like gods crafting a small pool, sizable for one person.</p>
                    <p>We layed out on the rocks basking in the sun, when were got too hot we rolled, literally, into our pool</p>
                </NatureSubSection>

            </NatureSection>

            <NatureSection
                img='./travel.jpg'
                title='Road Trip v2 2020'
                subtitle='Someone from a past life'
                description="Arizona - The Hidden Gem "
            >
                <NatureSubSection title='Flagstaff' img='./travel.jpg'>
                    <p>At the foot of Arizona's largest mountain we stayed. Within the watch of thounds of trees, this was not what you'd expect from Arizona</p>
                </NatureSubSection>

                <NatureSubSection title='Wupatki' img='./travel.jpg'>
                    <p>An ancient ruin of a small town. Complete with ball court and blow hole.</p>
                </NatureSubSection>

                <NatureSubSection title='Shout outs' img='./travel.jpg'>
                    <p>Sedona is visually stunning. Some of the stairs to Grande Escalante. Tourism industry is booming here</p>
                </NatureSubSection>

            </NatureSection>

            <NatureSection
                img='./travel.jpg'
                title='Road Trip 2019'
                subtitle='My brother'
                description="Lessons Learned - 2 Drivers"
            >
                <NatureSubSection title='Colorado' img='./travel.jpg'>
                    <p>Mountain Joe tooks us too</p>
                </NatureSubSection>

                <NatureSubSection title='Utah' img='./travel.jpg'>
                    <p>Bryce Canyon 8 mile hikes. Passed someone by the parking lot and we convinced them we were doing the loop a second time</p>
                </NatureSubSection>

                <NatureSubSection title='Yellowstone to Red Lodge' img='./travel.jpg'>
                    <p>Grand Tetons & Yellowstone - Saw the sites and got a camping spot</p>
                    <p>Where to next? Ask this guy by himself on a motorcycle</p>
                    <p>"Go 6 hours North, Drive through the park, you'll go up to Beartooth Path, keep going into a town called Red Lodge. Go about 13-15 miles down the road from the gas station and there will be a camping spot there"</p>
                    <p>Just like that we saw the most terrifying ski lift, 16ft snow banks on the sides of the road, climbing up to 8000ft. When we made it to Red Lodge, there was the camp ground, right where he said it would be. And right on time, we caught the sunset in "Big Sky Country".</p>
                </NatureSubSection>

            </NatureSection>

            <NatureSection
                img='./travel.jpg'
                title='Road Trip 2018'
                subtitle='The Three Amigos'
                description="The Birth of the Road Warriors"
            >
                <NatureSubSection title='Walking in the dark with the Ice Man' img='./travel.jpg'>
                    <p>How do you say Nederland, the home of the Frozen Man.
                        Camping on the outskirts of town, we met Alan.
                        Confirming there was a spot to camp we hiked out and back ~2 miles each way.
                        When we got back it was starting to get dark and we still needed to cook dinner and so we did.
                        After indulging in hotdogs, we ventured out to reconvine with Alan, except we were walking through the pitch black one headlamp and one crankable latter.
                        We carried out our two tents, pillows and sleeping backs all while taking shifts cranking the lantern
                        We made it and got some rest. In the morning thought to be extra quite as not to wake Alan. Yet when we got to the parking lot he was already there cleaning up from breakfast. This man truly inspired me.
                        We send our fairwells and headed onto our next destination.
                    </p>
                </NatureSubSection>

                <NatureSubSection title='Hot Springs!' img='./travel.jpg'>
                    <p>Welcome to Glendale, in the western heart of the rockies. Red stained mountains covered in a spotted canopy of deep green.
                        We found a camping spot in town to relax. The campground manager, Craig, was a super cool dude and extremely helpful.
                        We got to bask in hot springs and acquant ourselves further with the beautiful state
                        On the last day we ask Craig where would he go if he was joining us and with no hesitation he replied, "Sea Glass Shore"
                        He ranted and raved about the sea glass as well as "the waves crash onto the rocks and splash up 15, 20ft. You need to see it"
                        Having made a friend in Craig and leaving the state sortly there after we gave him our remaining cannabis products in fear of being arreseted.
                    </p>
                </NatureSubSection>

                <NatureSubSection title='Zion' img='./travel.jpg'>
                    <p>Convinced our friend there was a restaurant somewhere along the Narrows hiking trail. If you're not familiar this trail requires walking up a river through two rocks faces that scale up to at least 500ft.
                        There was no restaurant and his poor sole was starving after we had gone about 5 miles.
                        On the way back someone had asked me if there was anything to see further down the trail.
                        I laughed and said keep going you'll see it, knowing plainly everything to see was surrounding us. I mean we were standing in a river with some 1000 other people all walking up and down the trail.
                    </p>
                </NatureSubSection>

                <NatureSubSection title='Frisbee Valley' img='./travel.jpg'>
                    <p>A quick shoutout to this mysterious place. Upon driving to our disperede camping spot, there was someone that had set up a 20ft teepee, which was breathtaking.
                        Further along the road we all agreed on a spot and hoped out. Frisbee Valley.
                        We were all quite paranoid and the only solution to slow our racing minds was throwing the frisbee around.

                    </p>
                </NatureSubSection>

            </NatureSection>
        </>
    );
}

interface INatureSection {
    title: string;
    subtitle: string;
    description: string;
    children: JSX.Element | JSX.Element[];
    img: string
}

const NatureSection = ({ title, subtitle, description, children, img }: INatureSection) => {
    const [readMore, setReadMore] = useState(false);

    // TODO : MAKE LIKE A BLOG POST

    return (
        <div className='container'>
            <div style={{ borderBottom: "1px solid var(--color-white)", paddingBottom: '2rem', marginTop: '2rem' }}>
                {/* <div style={{ flex: 1, display: 'flex', justifyContent: 'flexEnd', alignItems: 'center', maxHeight: '50vh'}}>
                <img src={img} />
            </div> */}
                <div style={{ flex: 2 }}>
                    <h2>{title}</h2>
                    <p className='bungee'>{subtitle}</p>
                    <p>{description}</p>
                    <button className='mt-1' onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>

                    {readMore && (
                        <>
                            {children}
                            <button className='mt-1' style={{position: 'sticky', bottom: '6rem'}}  onClick={() => setReadMore(!readMore)}>
                                {readMore ? "Show Less" : "Read More"}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

const NatureSubSection = ({title, children, img} : {title: string, children: JSX.Element | JSX.Element[], img?: string, }) => {
    return (
        <div className="mt-1">
            { img && <img src={img} style={{aspectRatio: '3/2'}} />}
            <h3>{title}</h3>
            {children}
        </div>
    )
}