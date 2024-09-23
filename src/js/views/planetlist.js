import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 
import "../../styles/home.css";

export const PlanetList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPlanets();
  }, []);

  if (!store.planets.length) {
    return <div>Loading...</div>;
  }

  const getPlanetImageUrl = (url) => {
    const id = url.split("/").filter(Boolean).pop();
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  };

  const handleFavorite = (planet) => {
    actions.PlanetFavorite(planet);
  };

  return (
    <div className="container">
      <div className="card-list-container">
        <div className="card-list row flex-nowrap overflow-auto">
          {store.planets.map(planet => (
            <div className="card" key={planet.uid}>
              <img src={getPlanetImageUrl(planet.url)} className="card-img-top" alt={planet.name} />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-content">{planet.climate} {planet.population}</p>
                <div className="button-container d-flex justify-content-between">
                <Link to={`/planet/${planet.uid}`}  className="btn btn-info">Details</Link>
                <button className="btn btn-outline-warning" onClick={() => handleFavorite(planet)}>
                  {store.favorites.includes(planet) ? "★" : "☆"}
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};