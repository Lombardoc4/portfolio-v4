import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home";
import WorkPage from "./pages/work";
import ArtPage, { ArtLayout, GalleryPage } from "./pages/art";
import AboutPage from "./pages/about";
import { NaturePage } from "./pages/nature";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "art/",
                element: <ArtLayout />,
                children: [
                    {
                        index: true,
                        element: <ArtPage />,
                    },
                    {
                        path: "digital",
                        element: <GalleryPage type='digital' />,
                    },
                    {
                        path: "analog",
                        element: <GalleryPage type='analog' />,
                    },
                    {
                        path: "video",
                        element: <GalleryPage type='video' />,
                    },
                ],
            },
            {
                path: "nature",
                element: <NaturePage />,
            },
            {
                path: "work",
                element: <WorkPage details={true} />,
            },
        ],
    },
]);
