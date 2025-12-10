import { Outlet } from 'react-router-dom';

export default function Main() {
    return (
        <main>
            <div className="container-fluid p-0">
                <Outlet />
            </div>
        </main>
    )
}