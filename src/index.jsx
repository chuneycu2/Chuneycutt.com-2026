import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router";

import App from './App'
import Home from "./components/1-pages/Home";
import Projects from "./components/1-pages/Projects";
import DataLoader from "./components/data/DataLoader.js";
import DataAndMediaLoader from "./components/data/DataAndMediaLoader.js";

const revalidator = ({ nextUrl }) => {
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
                shouldRevalidate: ({ currentUrl, nextUrl }) => {
                    // Check if the pathname and search params are the same
                    const isSamePage = currentUrl.pathname === nextUrl.pathname &&
                        currentUrl.search === nextUrl.search;

                    // If it's the same page but a different hash, return false to skip loader
                    if (isSamePage && currentUrl.hash !== nextUrl.hash) {
                        return false;
                    }
                    return true; // Revalidate for other changes
                }
            },
            {
                path: "projects",
                Component: Projects,
                loader: DataAndMediaLoader,
                HydrateFallback: () => <div></div>,
            },
            {
                path: "projects/:slug",
                Component: Home,
                loader: DataAndMediaLoader,
                HydrateFallback: () => <div></div>,
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
