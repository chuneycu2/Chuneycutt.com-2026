import React from 'react';
import Sidebar from "../2-templates/Sidebar.jsx";
import Content from "../2-templates/Content.jsx";
import {useLoaderData} from "react-router";
import DataParser from "../data/DataParser.js";

export default function Projects() {
    const data  = useLoaderData();
    const pageData = DataParser(data);
    console.log(pageData);
    return (
        <div className="container-main projects row m-0">
            <h2>Projects</h2>
        </div>
    )
}