export default function SectionTitles(props) {
    const {title, intro} = props
    return (
        <div className={`title-container section ${title}`}>
            {title && <h2>{title}</h2>}
            {intro && <p className="section-intro">{intro}</p>}
        </div>
    )
}