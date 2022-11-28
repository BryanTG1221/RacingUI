import { AiOutlineAppstoreAdd,AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export function OficcialPageLink () {
    return (
        <div className="OficcialPageLink">
            <a href="https://www.formula1.com/" className="linksURL">
                <AiOutlineHome className="OficcialPageLink__icon" />
            </a>
            <Link to={'/crud'} className="linksURL">
                <AiOutlineAppstoreAdd className="OficcialPageLink__icon"/>
            </Link>
        </div>
    )
}