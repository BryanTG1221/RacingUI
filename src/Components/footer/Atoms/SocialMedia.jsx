import {AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';

export function SocialMedia () {
    return (
        <ul className="__FooterContainer-SocialMedia">            
            <li className='linkSocialMedia'> <AiOutlineInstagram /> Instagram</li>
            <li className='linkSocialMedia'> <AiFillFacebook/> Facebook </li>
            <li className='linkSocialMedia'> <AiOutlineTwitter /> Twitter </li>
        </ul>
    )
}