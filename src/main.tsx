import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./index.css"

export const AnalogTitle = () => <><span className='pixel'>A</span>n<span className='pixel'>a</span>l<span className='pixel'>o</span>g</>
export const ArtTitle = () => <><span className='pixel'>A</span>rt</>
export const DigitalTitle = () => <>D<span className='pixel'>i</span>g<span className='pixel'>i</span>t<span className='pixel'>a</span>l</>
export const VideoTitle = () => <>V<span className='pixel'>i</span>d<span className='pixel'>eo</span></>


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
