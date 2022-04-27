import React from 'react';

const Home = (props) => {
    return (
        <ul>
            <div>
                {props.name}    
            </div>
            <div>
                <img src="" alt={props.name} />
            </div>
       </ul>
    );
}

export default Home;
