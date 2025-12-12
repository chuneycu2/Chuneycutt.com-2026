import SectionTitles from "./SectionTitles.jsx";
import SectionEntries from "../3-organisms/SectionEntries.jsx"
import ProjectLinks from "../5-atoms/ProjectLinks.jsx";
import { Link, Element } from 'react-scroll';


export default function Content(props) {
    const { content, media } = props;
    //console.log(props);
    //console.log(media);

    const sections = content.map(sec => (
        <Element name={sec.section_title.replace(/\s/g, '')}>
            <section key={sec.section_title}>
                <SectionTitles title={sec.section_title} intro={sec.section_intro}/>
                <div className="section-entries">
                    <SectionEntries content={sec} media={media}/>
                    {sec.links && <ProjectLinks links={sec.links}/>}
                </div>
            </section>
        </Element>
    ));

    return (
        <section className="content col-12 col-md-7 px-0">
            {sections}
        </section>
    )
}