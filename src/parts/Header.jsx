import React, { useContext } from 'react'
import { currencyAppContext } from '../hooks/useCurrencyContext';

export default function Header() {
    const { setSearch } = useContext(currencyAppContext);

    ///onChange event 
    function searchDataHandler(event) {
        setSearch(event.target.value);
    }


    return (
        <header className='d-flex justify-content-center'>
            <form action="">
                <h1>Search currency</h1>
                <input type="search" name="" id="" onChange={searchDataHandler} />
            </form>
        </header>
    )
}
