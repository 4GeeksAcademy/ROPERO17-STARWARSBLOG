
import React from 'react';
import { CardList } from "./cardlist";
import { PlanetList } from "./planetlist";
import "../../styles/home.css";

export const Home = () => {
    return (
        <div className="container">
            <section className="mb-5">
                <h1 className="text-center my-4">Star Wars Characters</h1>
                <CardList />
            </section>
            <section>
                <h1 className="text-center my-4">Star Wars Planets</h1>
                <PlanetList />
            </section>
        </div>
    );
};

export default Home;
