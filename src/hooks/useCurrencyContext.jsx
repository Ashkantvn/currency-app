import { createContext } from "react";
import { useState } from 'react';

export const currencyAppContext = createContext();



function Provider({ children }) {
    const [Search, setSearch] = useState("");
    const [ishidden, setishidden] = useState(false);
    const [isNightMode, setisNightMode] = useState(false);
    return (
        <currencyAppContext.Provider value={{
            Search,
            setSearch,
            ishidden,
            setishidden,
            isNightMode,
            setisNightMode
        }}>
            {children}
        </currencyAppContext.Provider>
    )
}


export default Provider;