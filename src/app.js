import React, { useContext } from 'react';
import Card from './parts/Card';
import { useFetch } from './hooks/useFetch';
import Header from './parts/Header';
import { currencyAppContext } from './hooks/useCurrencyContext';


const App = () => {
    const fetchData = useFetch();
    const { Search } = useContext(currencyAppContext);

    //mapping fetchData
    const FilterSearch = fetchData.filter(coin => coin.name.toLowerCase().includes(Search.toLowerCase()))
    const mappingfetchData = FilterSearch.map(coin => {
        return (
            <Card key={coin.id} coin={coin} />
        )
    })
    return (
        <main>
            <Header />
            <div className='coin'>
                {mappingfetchData}
            </div>
        </main>
    );
}

export default App;

