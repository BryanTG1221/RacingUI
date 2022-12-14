import { Link } from 'react-router-dom';

export function MenuOptions () {
    return (
        <div className="MenuOptions">
            <ul className="menuList">
                <li className="itemListMenu">
                    <a href="#TeamsMain" className="linkMenuOptions">TEAMS</a>
                </li>
                <li className="itemListMenu">
                    <a href="#DriversMain" className="linkMenuOptions">DRIVERS</a>
                </li>
                <li className="itemListMenu">
                    <a href="#" className="linkMenuOptions">CIRCUITS</a>
                </li>
                <li className="itemListMenu">
                    <Link to={'/docs'} className="linkMenuOptions">DOCS</Link>
                </li>
            </ul>
        </div>
    );
}