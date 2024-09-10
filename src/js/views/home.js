
import "../../styles/home.css";
import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { CardList } from "./cardlist";
import { PlanetList } from "./planetlist";

export const Home = () => {
	
	

    return (
        <div>
		<h1>Characters</h1>
		<CardList />
		<h1>Planets</h1>
		<PlanetList />
	  </div>
    );
};


export default Home;

