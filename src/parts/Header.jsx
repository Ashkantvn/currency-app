import React, { useContext, useMemo } from 'react'
import { currencyAppContext } from '../hooks/useCurrencyContext';

export default function Header() {
    const { setSearch ,ishidden} = useContext(currencyAppContext);
    const display =  useMemo(() => ishidden?"top-h":"", [ishidden])
   
    ///onChange event 
    function searchDataHandler(event) {
        setSearch(event.target.value);
    }

    return (
        <header  className={`${display} d-flex justify-content-center`}>
            <form action="">
                <input type="search" name="" id="" onChange={searchDataHandler} placeholder='Search currency'/>
            </form>
        </header>
    )
}
