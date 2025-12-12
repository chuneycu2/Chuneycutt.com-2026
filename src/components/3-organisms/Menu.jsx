import { Link } from 'react-scroll';

export default function Menu(props) {

    // Assemble menu items from component sections present in the data
    const sections  = props.sections;
    const menuItems = sections?.map((sec) => (
        <li key={sec.section_title}>
            {/* see options: https://www.npmjs.com/package/react-scroll */}
            <Link
                activeClass="active"
                spy={true}
                to={sec.section_title.replace(/\s/g, '')}
                smooth={true}
                duration={400}
                offset={-36}
                spyThrottle={200}>
                {sec.section_title}
            </Link>
        </li>
    ));

    if (sections) {
        return (
            <nav className="menu-container">
                <ul className="menu">
                    {menuItems}
                </ul>
            </nav>
        )
    }
}