import React from 'react';
import Card from './Card';

const CardList = ({ results }) => {
    return(
        <div>
            {
                results.map((user, i) =>{
                    return(
                        <Card 
                            key = {i}
                            name = {results[i].name}
                            birthYear = {results[i].birth_year}
                        />
                    )
                })
            }

        </div>
    );
}

export default CardList;