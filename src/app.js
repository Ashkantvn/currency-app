import {useState , useEffect} from 'react';
import React from 'react';
import Card from './Card';
import axios from 'axios';

const App = () => {
    const [Data, setData] = useState([]);
    const [Search, setSearch] = useState("");
    ////////////////////get data
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((res) =>{
            setData(res.data)
        })
        .catch(error =>{console.log(error);})
    }, []);
    ///////////////////////////searching    
    const FilterSearch =  Data.filter(coin => coin.name.toLowerCase().includes(Search.toLowerCase()))

    function changing(event) {
        setSearch(event.target.value);
        
    }
    return (
        <div>
            <header className='d-flex justify-content-center'>
                <form action="">
                    <h1>Search currency</h1>
                    <input  type="search" name="" id="" onChange={changing}/>
                </form>
            </header>
            <div className='coin'>
                {FilterSearch.map(coin => {
                    return(
                    <Card key={coin.id} name={coin.name} symbol={coin.symbol} imgurl={coin.image} 
                    currentPrice={coin.current_price} pricechangePercentage={coin.price_change_percentage_24h}
                    priceChange={coin.price_change_24h} marketCap={coin.market_cap}/>
                    )
                })}
            </div>
        </div>
    );
}

export default App;

