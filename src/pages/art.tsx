import { NavLink, Outlet } from "react-router-dom";
import { AnalogTitle, ArtTitle, DigitalTitle, VideoTitle } from "../main";
import { IArtPiece, artLibrary } from "../artLibrary";
import { SpringBubbles } from "../components/Bubble";
import { Fragment } from "react";

export const ArtLayout = () => {
    return (
        <>
            <ArtNav/>
            <Outlet />
        </>
    );
};

export const ArtNav = () => {
    return (
        <div className='art-nav container'>
                <ArtCard
                    link='/art/analog'
                    img='/analog-art.png'
                    title={
                        <>
                            <AnalogTitle />
                        </>
                    }
                />
                <ArtCard
                    link='/art/digital'
                    img='/digi-art.png'
                    title={
                        <>
                            <DigitalTitle />
                        </>
                    }
                />
                <ArtCard link='/art/video' img='/video.png' title={<VideoTitle />} />
            </div>
    )
}

function shuffle(array: IArtPiece[]) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

function ArtPage() {
    const allArtShuffle = shuffle(artLibrary)

    return (
        <div className='container'>
            <h1 style={{marginTop: '3rem'}}>Art</h1>
            <p>A random shuffle of my art</p>

            {allArtShuffle.map((artPiece: IArtPiece, i) => (
                <Fragment key={artPiece.title}>
                    <ArtPiece {...artPiece} showType={true} />
                    {i !== allArtShuffle.length - 1 && (
                        <div className='mt-1'>
                            <SpringBubbles />
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    );

}

export default ArtPage;

function ArtCard({ link, img, title }: IArtCard) {
    return (
        <NavLink
            reloadDocument
            to={link}
            className='art-card'
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <h2 className='title'>{title}</h2>
        </NavLink>
    );
}


export const GalleryPage = ({ type }: { type: "digital" | "analog" | "video" }) => {
    const art = artLibrary.filter(art => art.type === type);

    return (
        <div className='container' style={{ marginTop: "2rem" }}>
            <h1>
                {type === "analog" && <AnalogTitle />}
                {type === "digital" && <DigitalTitle />}
                {type === "video" && <VideoTitle />}
                {type !== "video" && (
                    <>
                        {" "}
                        <ArtTitle />
                    </>
                )}
            </h1>

            {type === "analog" && <p>Drawings, paintings, and collages</p>}
            {type === "digital" && <p>Digital collages and photo edits</p>}
            {type === "video" && <p>8mm film, that real vintage field</p>}

            {art.map((artPiece: IArtPiece, i) => (

                <Fragment key={artPiece.title}>
                    <ArtPiece {...artPiece} />
                    {i !== art.length - 1 && <div className="mt-1"><SpringBubbles /></div>}
                </Fragment>
            ))}
        </div>
    );
};


interface IArtCard {
    link: string;
    img: string;
    title?: JSX.Element;
}

interface IArtPieceComponent extends IArtPiece
{
    showType?: boolean
}

const ArtPiece = ({ title, year, description, img, video, type, showType=false }: IArtPieceComponent) => {
    return (
        <div
            className='segment'
            style={{
                marginInline: "-1rem",
            }}
        >
            {img}
            {video}

            <div className='container title'>
                {showType && <small style={{textTransform: 'uppercase'}}>{type}</small>}
                <h2>{title}</h2>
                {year && <p className="pixel">{year}</p>}
                <p className="mt-1">{description}</p>
            </div>

        </div>
    );
};
