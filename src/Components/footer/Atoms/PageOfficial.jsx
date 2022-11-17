import { AiOutlineAppstoreAdd,AiOutlineHome } from 'react-icons/ai';

export function OficcialPageLink () {
    return (
        <div className="OficcialPageLink">
            <a href="https://www.formula1.com/" className="linksURL">
                <AiOutlineHome className="OficcialPageLink__icon" />
            </a>
            <a href="#" className="linksURL">
                <AiOutlineAppstoreAdd className="OficcialPageLink__icon"/>
            </a>
        </div>
    )
}