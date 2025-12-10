import { useLoaderData } from "react-router";

import Sidebar from "../2-templates/Sidebar.jsx";
import Content from "../2-templates/Content.jsx";
import DataParser from "../data/DataParser.js";

export default function Home() {
    const data  = useLoaderData();
    const pageData = DataParser(data);
    console.log(pageData);
    return (
        <div className="container-main home row m-0">
            <Sidebar/>
            <Content/>
            {/* TODO: add transitions between pages with useTransition */}
        </div>
    )
}