import ProjectLinks from "../5-atoms/ProjectLinks.jsx";
import CyrusPic from "../../assets/img/cyrus-pic.jpg";

export default function About() {
    return (
        <div className="entry-container">
            <div className="bio-card d-flex pb-4">
                <img src={CyrusPic} alt="cyrus" />
                <div className="bio">
                    <h3>Cyrus Huneycutt</h3>
                    <p className="entry-subtitle">Durham, NC, USA</p>
                    <ProjectLinks />
                </div>
            </div>
            <div className="section-content">
                <p>With more than ten years of professional experience in a variety of professional settings, I am
                    comfortable:</p>
                <ul>
                    <li>Writing code in common front-end languages and markup (HTML, CSS, JS, PHP).</li>
                    <li>Adapting to tech stacks and learning new frameworks, libraries, and content management
                        systems.
                    </li>
                    <li>Automating everyday front-end tasks and setting up local development workflows.</li>
                    <li>Writing technical and non-technical documentation for different teams.</li>
                    <li>Managing Git repositories and deployment pipelines.</li>
                    <li>Troubleshooting anything I encounter and staying patient in the face of error.</li>
                    <li>Mentoring those junior to me and sharing my knowledge with them.</li>
                    <li>Taking direction from those senior to me and accepting feedback from them.</li>
                    <li>Functioning as both a developer and a designer.</li>
                    <li>Collaborating with teams of any size and working together towards shared goals.</li>
                </ul>
                <h4 className="h3">Background</h4>
                <p>I graduated from <a href="/">UNC Chapel Hill</a> in May 2012 with a degree from the School of Journalism and Mass Communication, specializing in Editing and Graphic Design.</p>

                <p>From 2013 to 2019, I rose from Design Associate to Senior Designer at the Chapel Hill-based B-Corp Participate Learning (previously VIF International Education), a global education and cultural exchange company. I was instrumental in rebranding the VIF into Participate, which later became two organizations, Participate and Participate Learning.</p>

                <p>During this time, I picked up introductory dev experience writing Bootstrap markup for company landing pages and building email marketing templates. It wasn't long until I began to take online courses and experiment with front-end languages by building tools I could use for my hobbies.</p>

                <p>In 2019, I made a career move and became a front-end developer for Relias, a Morrisville-based healthcare education and workforce enablement solutions company. In 2024, I was hired as a Senior Web Developer at NetApp, a Fortune 500 data infrastructure company.</p>
            </div>
        </div>
    )
}