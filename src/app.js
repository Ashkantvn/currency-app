import {useState} from 'react';
import React from 'react';
import Card from './parts/Card';
import {useFetch} from './hooks/useFetch';
const App = () => {
    const Data = useFetch(); 
    ///searching    
    const [Search, setSearch] = useState("");
    const FilterSearch =  Data.filter(coin => coin.name.toLowerCase().includes(Search.toLowerCase()))

    function changing(event) {
        setSearch(event.target.value);
        
    }
    ////mapping data
    const mappingData = FilterSearch.map(coin => {
        return(
        <Card key={coin.id}  coin={coin}/>
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

