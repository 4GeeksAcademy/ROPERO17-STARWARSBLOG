import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"; 
import "../../styles/home.css";

export const PlanetList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPlanets();
  }, [actions]);

  if (!store.planets.length) {
    return <div>Loading...</div>;
  }
  const getPlanetImageUrl = (url) => {
    
    const id = url.split("/").filter(Boolean).pop();
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
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
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};