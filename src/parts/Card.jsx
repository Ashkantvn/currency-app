import React from 'react';

const Card = ({ coin }) => {
    return (
        <ul className='custom-card p-2 text-center'>
            <div className='card-informations  m-2 '>
                <img className='mx-auto' src={coin.image} alt={coin.name} />
            </div>
            <div className='card-informations  m-2'>
                <h4>{coin.symbol}</h4>
            </div>
            <div className='card-informations  m-2'>
                <h4>{coin.name}</h4>
            </div>
            <div className='card-informations  m-2'>
                <h4 className='fw-bold'>Current price : </h4>
                $ {coin.current_price}
            </div>
            <div className='card-informations  m-2'>
                <h4 className='fw-bold'>Market_cap:</h4>
                ${coin.market_cap}
            </div>
            <div className='card-informations  m-2'>
                <h4 className='fw-bold'>Price change percentage(in 24h):</h4>
                <div className={coin.price_change_percentage_24h > 0 ? 'green m  m-2' : 'red m  m-2'}>{coin.price_change_percentage_24h
                }%</div>
            </div>
        </ul>
    );
}

export default Card;
