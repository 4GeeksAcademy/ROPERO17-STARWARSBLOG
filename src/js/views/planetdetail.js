import React, { useEffect, useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        await actions.loadSinglePlanet(id);
        setError(null);
      } catch (err) {
        console.error("Failed to load planet:", err);
        setError("Failed to load planet details. Please try again.");
      }
    };
    fetchPlanet();
  }, [id, actions]);

  const planet = store.singlePlanet;

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  if (!planet) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{planet.name}</h2>
      <img 
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
        alt={planet.name} 
        className="img-fluid mb-3"
      />
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <p><strong>Diameter:</strong> {planet.diameter}</p>
      <Link to="/planet" className="btn btn-primary mt-3">Back to Planets</Link>
    </div>
  );
};

export default PlanetDetail;