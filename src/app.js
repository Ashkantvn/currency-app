import {useState , useEffect} from 'react';
import React from 'react';
import Home from './Home';
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

    console.log(Data);
    return (
        <div>
            <div>
                <form action="">
                    <h1>Search currency</h1>
                    <input type="search" name="" id="" onChange={changing}/>
                </form>
            </div>
            {FilterSearch.map(coin => {
                return(
                <Home key={coin.id} name={coin.name} />
                )
            })}
        </div>
    );
}

export default App;

