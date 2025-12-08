export default function Menu() {
    return (
        <nav className="menu-container">
            {/* programmatically add menu items based on section name */}
            <ul className="menu">
                <li>Experience</li>
                <li>Skills & Tools</li>
                <li>Projects</li>
                <li>About</li>
                <li>Accolades</li>
            </ul>
        </nav>
    )
}