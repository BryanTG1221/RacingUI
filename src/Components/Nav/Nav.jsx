import { LogoHeader } from './Atoms/Logo';
import { MenuOptions } from './Atoms/MenuOptions';
import { SearchBar } from './Atoms/searchBar';
import { ButtonSearch } from './Atoms/button'
import '../../Styles/navStyles.css';

export function NavBar () {
    return (
        <nav className='navContainer'>
            <LogoHeader />
            <MenuOptions />
            <div className='SearchContainer'>
                <SearchBar />
                <ButtonSearch />
            </div>
        </nav>
    );
}