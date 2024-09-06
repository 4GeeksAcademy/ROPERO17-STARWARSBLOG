
import "../../styles/home.css";
import React, { useEffect, useContext } from 'react';
import HorizontalList from '../component/horizontallist';
import { Context } from '../store/appContext';

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
        actions.getCharacters(); // Llamada para obtener personajes
        actions.getPlanets(); // Llamada para obtener planetas
        actions.getVehicles(); // Llamada para obtener vehículos
    }, []);

    return (
        <div className="container">
            <h1>Star Wars Blog</h1>

            <h2>Characters</h2>
            <HorizontalList items={store.characters} />

            <h2>Planets</h2>
            <HorizontalList items={store.planets} />

            <h2>Vehicles</h2>
            <HorizontalList items={store.vehicles} />
        </div>
    );
};


export default Home;

