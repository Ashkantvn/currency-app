import {useState} from 'react';
import React from 'react';
import Card from './parts/Card';
import {useFetch} from './hooks/useFetch';
const App = () => {
    const Data = useFetch(); 
    ///////////////////////////searching    
    const [Search, setSearch] = useState("");
    const FilterSearch =  Data.filter(coin => coin.name.toLowerCase().includes(Search.toLowerCase()))

    function changing(event) {
        setSearch(event.target.value);
        
    }
    //////////////////////mapping data
    const mappingData = FilterSearch.map(coin => {
        return(
        <Card key={coin.id} name={coin.name} symbol={coin.symbol} imgurl={coin.image} 
        currentPrice={coin.current_price} pricechangePercentage={coin.price_change_percentage_24h}
        priceChange={coin.price_change_24h} marketCap={coin.market_cap}/>
        )
    })
    return (
        <div>
            <header className='d-flex justify-content-center'>
                <form action="">
                    <h1>Search currency</h1>
                    <input  type="search" name="" id="" onChange={changing}/>
                </form>
            </header>
            <div className='coin'>
                {mappingData}
            </div>
        </div>
    );
}

export default App;

