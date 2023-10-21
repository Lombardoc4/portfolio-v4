import { Link } from "react-router-dom";
import { HorizontalBubbles } from "./Bubble";

export const Footer = () => (
    <footer
        style={{
            backgroundColor: "var(--color-black)",
            background: "linear-gradient(0deg, black, transparent)",
            paddingBottom: "6rem",
            // 768px paddingBlock: "0 rem 2rem",
            color: "var(--color-white)",
        }}
    >
        <HorizontalBubbles count={1} marginClass='my-4' />
        <div
            className='container'
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
            }}
        >
            <div style={{ maxWidth: "320px" }}>
                {/* <VerticalBubbles count={Math.floor((window.innerWidth - 200) / 2)} /> */}
                <Link to='https://github.com/lombardoc4' className='roboto d-block'>
                    Github
                </Link>
                <Link
                    target='_blank'
                    to='https://drive.google.com/file/d/1ewXd_Z0H8X59Kh5vYX1bnnJLVukUa4fW/view?usp=sharing'
                    className='roboto d-block'
                >
                    View CV
                </Link>
                <div>LOM13@PM.ME</div>

                <div className='mt-1'>
                    <h3 className='pixel'>
                        Cris Lombardo @ {new Date().getFullYear()}
                        <br />
                        Based in Fort Lee, NJ
                    </h3>
                </div>
            </div>
        </div>
    </footer>
);
