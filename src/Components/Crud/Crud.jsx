import { Form } from './Atoms/Form';
import { SearchBar } from '../Nav/Atoms/searchBar';
import '../../Styles/CrudPage.css';

export function CrudPage () {
    return (
        <div className='__MainCrud-Container'>
            <div className='__MainCrud-Content'>
                <div className='__FormContainer'>
                    <Form />
                </div>
            </div>
        </div>
    )
}