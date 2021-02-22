import React from 'react';
import photoOfMe from '../static/img/PictureOfMe.jpg';

export default (props) => {
    return (
        <div>
            <img src={photoOfMe} />
            <div>
                <h1>My name is Aric</h1>
                <p>
                    I lived in 3 different countries, 3 different states, over 10 different cities, 
                    and attended over 8 different schools. A positive aspect that came out of this 
                    hardship was that I found adaptability being one of the most important things 
                    in life, as life can throw so many different things at you at any given time.
                </p>
            </div>
        </div>
    );
}