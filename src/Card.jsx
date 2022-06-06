import React from 'react';

const Home = (props) => {
    return (
        <ul className='list row'>
            <div className='m col m-2'>
                <h4>{props.name}</h4>    
            </div>
            <div className='m col m-2'>
                <h4>{props.symbol}</h4>    
            </div>
            <div className='m col m-2'>
                <img src={props.imgurl} alt={props.name} />
            </div>
            <div className='m col m-2'>
                <h4>Current price : </h4>
                $ {props.currentPrice}
            </div>
            <div className='m col m-2'>
                <h4>Price change percentage(in 24h):</h4>
                <div className={props.pricechangePercentage > 0 ?'green m col m-2':'red m col m-2'}>{props.pricechangePercentage}%</div> 
            </div>
            <div className='m col m-2'>
                <h4>Market_cap:</h4>
                ${props.marketCap}
            </div>
       </ul>
    );
}

export default Home;
