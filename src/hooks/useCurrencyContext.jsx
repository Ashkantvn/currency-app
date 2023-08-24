import { createContext } from "react";
import { useState } from 'react';

export const currencyAppContext = createContext();



function Provider({ children }) {
    const [Search, setSearch] = useState("");

    return (
        <currencyAppContext.Provider value={{
            Search,
            setSearch
        }}>
            {children}
        </currencyAppContext.Provider>
    )
}


export default Provider;