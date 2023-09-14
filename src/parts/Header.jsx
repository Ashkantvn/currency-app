import React, { useContext, useMemo } from 'react'
import { currencyAppContext } from '../hooks/useCurrencyContext';
import { BsSunFill, BsMoonFill } from "react-icons/bs"

export default function Header() {
    const { setSearch, ishidden, isNightMode ,setisNightMode} = useContext(currencyAppContext);
    const display = useMemo(() => ishidden ? "top-h" : "", [ishidden]);
    
    ///onChange event 
    function searchDataHandler(event) {
        setSearch(event.target.value);
    }
    

    ///submit handler
    function submitHandler(event){
        event.preventDefault();
    }


    ///night mode event handler
    function nightModeClickHandler(){
        setisNightMode((isNightMode)=>!isNightMode);
    }
    
    return (
        <header className={`${display} d-flex justify-content-between px-4 align-items-center`}>
            <h1 className='brand'>Currency-app</h1>
            <form action="" onSubmit={submitHandler}>
                <input type="search" size="15" name="" id="" onChange={searchDataHandler} placeholder='Search currency' />
            </form>
            <button onClick={nightModeClickHandler} className='nightmode-button'>
                {isNightMode ? <BsMoonFill /> : <BsSunFill />}
            </button>
        </header>
    )
}
