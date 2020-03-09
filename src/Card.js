import React from 'react';

const Card = ({name, birthYear}) => {
    return(
        <div className ='tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>{name}</h2>
            <p>{birthYear}</p>
        </div>
    );
}

export default Card;