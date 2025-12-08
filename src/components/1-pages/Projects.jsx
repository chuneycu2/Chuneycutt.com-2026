import React from 'react';
import Sidebar from "../2-templates/Sidebar.jsx";
import Content from "../2-templates/Content.jsx";
import {Link} from "react-router-dom";

export default function Projects() {
    return (
        <div className="container-main projects row m-0">
            <h2>Projects</h2>
            <Link to="/" viewTransition>Back to Cyrus Huneycutt</Link>
        </div>
    )
}