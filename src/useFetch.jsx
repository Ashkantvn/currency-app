import {useEffect, useState} from 'react';
import axios from 'axios';

export const Usefetch = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res =>{setData(res.data)})
        // .catch(error =>{console.log(error);})
        }, []);
    return Data;
}


