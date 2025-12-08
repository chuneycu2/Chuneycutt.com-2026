import Experiences from "../4-molecules/Experiences";
import SkillsAndTools from "../4-molecules/SkillsAndTools";
import Projects from "../4-molecules/Projects";
import About from "../4-molecules/About";
import Accolades from "../4-molecules/Accolades";

export default function SectionEntries() {
    {/* programmatically map through data to render each article */}
    return (
        <>
            {/*
            programmatically determine which component to use for each entry
            multiple articles listed so CSS can be built
            */}
            <article className="section-entry experience">
                <Experiences/>
            </article>
            <article className="section-entry">
                <SkillsAndTools/>
            </article>
            <article className="section-entry">
                <Projects/>
            </article>
            <article className="section-entry">
                <About/>
            </article>
            <article className="section-entry">
                <Accolades/>
            </article>
        </>
    )
}