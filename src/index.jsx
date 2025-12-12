import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router";

import App from './App'
import Home from "./components/1-pages/Home";
import Projects from "./components/1-pages/Projects";
import DataLoader from "./components/data/DataLoader.js";
import DataAndMediaLoader from "./components/data/DataAndMediaLoader.js";

const revalidator = ({ currentUrl, nextUrl }) => {
    if (currentUrl.hash !== nextUrl.hash) return false
    if (nextUrl.hash) return false;
}

const router = createBrowserRouter([
    {
        path: "*",
        element: <App/>,
        children: [
            {
                index: true,
                Component: Home,
                loader: DataAndMediaLoader,
                HydrateFallback: () => <div><p className="h1">Loading...</p></div>,
                shouldRevalidate: revalidator,
            },
            {
                path: "projects",
                Component: Projects,
                loader: DataLoader,
                HydrateFallback: () => <div></div>,
                shouldRevalidate: revalidator,
            },
            {
                path: "projects/:slug",
                Component: Home,
                loader: DataLoader,
                HydrateFallback: () => <div></div>,
                shouldRevalidate: revalidator,
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
