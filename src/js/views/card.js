import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/flux';

const Card = ({ item }) => {
    const { actions } = useContext(Context);

    const handleFavoriteClick = () => {
        actions.addFavorite(item);
    };

    return (
        <div className="card">
            <h5>{item.name}</h5>
            <button onClick={handleFavoriteClick}>Add to Favorites</button>
        </div>
    );
};

export default Card;