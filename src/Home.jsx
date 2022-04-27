import React from 'react';

const Home = (props) => {
    return (
        <ul>
            <div>
                {props.name}    
            </div>
            <div>
                {props.symbol}    
            </div>
            <div>
                <img src={props.imgurl} alt={props.name} />
            </div>
            <div>
                <h4>Current price : </h4>
                $ {props.currentPrice}
            </div>
            <div>
                <h4>Price change percentage(in 24h):</h4>
                {props.pricechangePercentage} % 
            </div>
            <div>
                <h4>Maket_cap:</h4>
                {props.marketCap}
            </div>
       </ul>
    );
}

export default Home;
