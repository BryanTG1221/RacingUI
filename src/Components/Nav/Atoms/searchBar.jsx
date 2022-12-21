import { useState,useEffect,useRef, useMemo } from 'react';
import { GetDriver } from '../../../JS/getDataAPI.js';
import { createAutocomplete } from '@algolia/autocomplete-core';
import '../../../Styles/stylesAutocomplete.css';
import { Link } from 'react-router-dom';

export function SearchBar (props) {

    const [autoComplete, setAutoComplete] = useState({
        collections: [],
        isOpen: false,
    }); 

    const autoCompleteElement = useMemo(() => createAutocomplete({
        placeholder: 'Search',
        onStateChange: ({ state }) => setAutoComplete(state),
        getSources: () => [{
            sourceId: 'drivers', 
            getItems: ({ query }) => {
                if (!!query) {
                    return GetDriver(query);
                }
            }
        }],
        ...props
    }),[props]);

    const formRef = useRef(null);
    const inputRef = useRef(null);
    const panelRef = useRef(null);

    const formProps = autoCompleteElement.getFormProps({ inputElement : inputRef.current });
    const inputProps = autoCompleteElement.getInputProps({ inputElement : inputRef.current });

    const handleInputSearch = async (event) => {
        const inputValue = event.target.value;
        const dataResponse = await GetDriver(inputValue);
    }

    const AutocompleteItem = ({nameDriver,lastnameDriver,helmetImage}) => {
        return (
            <li className='itemDriver'>
                <Link to={`/driver/${lastnameDriver}`} className='itemAutocomplete'>
                    <img src={helmetImage} className='imgAutocomplete'/>
                    <p className='tittleAutocomplete'>{nameDriver} {lastnameDriver}</p>
                </Link>
            </li>
        )
    }

    return (
        <form className="searchBarContainer" {...formProps}>
            <input className="searchBarContent" id='searchBar' type={'text'} {...inputProps}/>
            {
                autoComplete.isOpen && (<div className="searchBarPanel" ref={panelRef} {...autoCompleteElement.getPanelProps()}>
                    {autoComplete.collections.map((collection,index) => {
                        const {items} = collection;
                        return (
                            <section key={`section-${index}`}>
                                <ul {...autoCompleteElement.getListProps()} className='listaAutocomplete'>
                                    {
                                        items.map( item => <AutocompleteItem key={item.nameDriver} {...item} />)
                                    }
                                </ul>
                            </section>
                        )
                    })}
                </div>)
            }
        </form>
    );
}