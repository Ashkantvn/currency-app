import React from 'react';

const Card = ({ coin }) => {
    console.log(coin);
    return (
        <ul className='list row'>
            <div className='m col m-2'>
                <h4>{coin.name}</h4>
            </div>
            <div className='m col m-2'>
                <h4>{coin.symbol}</h4>
            </div>
            <div className='m col m-2'>
                <img src={coin.image} alt={coin.name} />
            </div>
            <div className='m col m-2'>
                <h4>Current price : </h4>
                $ {coin.current_price}
            </div>
            <div className='m col m-2'>
                <h4>Price change percentage(in 24h):</h4>
                <div className={coin.price_change_percentage_24h > 0 ? 'green m col m-2' : 'red m col m-2'}>{coin.price_change_percentage_24h
                }%</div>
            </div>
            <div className='m col m-2'>
                <h4>Market_cap:</h4>
                ${coin.market_cap}
            </div>
        </ul>
    );
}

export default Card;
