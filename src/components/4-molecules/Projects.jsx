import SampleImg from "../../assets/img/sample-project-thumbnail.jpg";
import ProjectLinks from "../5-atoms/ProjectLinks.jsx";


export default function Projects(props) {
    const { content, media } = props;
    const projectImage = media?.filter((img) => {
        if (img.id === content?.project_image) {
            return img;
        }
    });
    console.log(content);
    return (
        <div className="entry-container">
            {/* programmatically map through props to render each experience */}
            <h3>{content.project_title}</h3>
            <p className="entry-subtitle">{content.project_company}</p>
            <div className="d-block d-sm-flex">
                <div className="project-thumbnail">
                    <img src={media && projectImage[0].source_url} alt={media && projectImage[0].alt_text} />
                </div>
                <div className="project-info">
                    <p className="entry-description">{content.project_intro}</p>
                    <ProjectLinks links={content.links} />
                </div>
            </div>
        </div>
    )
}