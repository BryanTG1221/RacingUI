import {AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';

export function SocialMedia () {
    return (
        <ul className="__FooterContainer-SocialMedia">            
            <li> <AiOutlineInstagram /> Instagram</li>
            <li> <AiFillFacebook/> Facebook </li>
            <li> <AiOutlineTwitter /> Twitter </li>
        </ul>
    )
}