import React from 'react';
import { useLoaderData } from "react-router";
import DataParser from "../data/DataParser.js";

import ProjectCard from "../4-molecules/ProjectCard";

export default function Projects() {
    // Fetch page and media data
    const data = useLoaderData();
    const pageData = DataParser(data[0].posts);
    const mediaData = data[0].media;
    const thisPage = pageData[0].acf.components_react[0];
    console.log(thisPage);

    return (
        <div className="container-main project-archive row m-0">
            <section className="row p-0 m-0">
                <div className="section-title col-12 col-md-4 pl-0 pr-4 pb-3">
                    <h2>{thisPage.section_title ? thisPage.section_title : 'Project Archive'}</h2>
                </div>
                <div className="section-intro col-12 col-md-8 px-0">
                    <p>{thisPage.section_intro ? thisPage.section_intro : ''}</p>
                </div>
            </section>
            <section className="row p-0 m-0">
                <ProjectCard content={thisPage} media={mediaData} />
            </section>
        </div>
    )
}