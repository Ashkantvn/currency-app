import {useEffect , useState} from 'react';
import axios from 'axios';

export const useFetch = () => {
    const [Data, setData] = useState([]);
    const fetchData =async ()=>{
        try {
            const fetchData  = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            setData(fetchData);
        } catch (error) {
            setData(error.message);
        }
    }
    ////////////////////get data
    useEffect(() => {
        fetchData();
        }, [])
        
    return Data ;
}

