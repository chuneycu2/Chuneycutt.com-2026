import { Link } from 'react-router-dom';

import Sidebar from "../2-templates/Sidebar.jsx";
import Content from "../2-templates/Content.jsx";

export default function Home() {
    return (
        <div className="container-main home row m-0">
            <Sidebar/>
            <Content/>
            {/* TODO: add transitions between 1-pages with useTransition */}
        </div>
    )
}