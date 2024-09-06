import React, { useContext } from 'react';
import { Context } from '../store/flux';
import Card from '../views/card';

const Favorites = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h2>Your Favorites</h2>
            <div className="d-flex flex-wrap">
                {store.favorites.length > 0 ? store.favorites.map(item => (
                    <Card key={item.uid} item={item} category={item.category} />
                )) : <p>No favorites added yet.</p>}
            </div>
        </div>
    );
};

export default Favorites;