import React from 'react';
import Card from '../views/card';

const HorizontalList = ({ items }) => {
    return (
        <div className="horizontal-list">
            {items.map(item => (
                <Card key={item.uid} item={item} />
            ))}
        </div>
    );
};

export default HorizontalList;