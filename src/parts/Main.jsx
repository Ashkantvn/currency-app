import React, { useContext } from 'react'
import { useFetch } from '../hooks/useFetch';
import { currencyAppContext } from '../hooks/useCurrencyContext';
import Card from './Card';

export default function Main() {
    const fetchData = useFetch();
    const { Search } = useContext(currencyAppContext);
    //mapping fetchData
    const mapper = ()=>{
        if( typeof fetchData === "string" || fetchData.length === 0){return fetchData;}
        const FilterSearch = fetchData.data.filter(coin => coin.name.toLowerCase().includes(Search.toLowerCase()));
        const mappingfetchData = FilterSearch.map(coin => {
            return (
                <Card key={coin.id} coin={coin} />
            )
        });
        return mappingfetchData.length>0?mappingfetchData:"Nothing Found !"
    }
    
    return (
        <main className='coin'>
            {mapper()}
        </main>
    )
}
