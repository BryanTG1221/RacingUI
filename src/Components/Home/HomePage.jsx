import { Body } from './body/Body';
import { Drivers } from './drivers/Drivers';
import '../../Styles/HomePage.css';

export const HomePage = () => {
    return (
        <>
        <Body />
        <div className='sticky-container'>
            <Drivers />
        </div>
        </>
    )
}