import React, { useEffect, useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterDetail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        await actions.loadSingleCharacter(id);
        setError(null);
      } catch (err) {
        console.error("Failed to load character:", err);
        setError("Failed to load character details. Please try again.");
      }
    };
    fetchCharacter();
  }, [id, actions]);

  const character = store.singleCharacter;

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  if (!character) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{character.name}</h2>
      <img 
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
        alt={character.name} 
        className="img-fluid mb-3"
      />
      <p><strong>Description:</strong> {character.description}</p>
      <p><strong>Birth Year:</strong> {character.birth_year}</p>
      <p><strong>Eye Color:</strong> {character.eye_color}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Hair Color:</strong> {character.hair_color}</p>
      <p><strong>Height:</strong> {character.height}</p>
      <p><strong>Mass:</strong> {character.mass}</p>
      <p><strong>Skin Color:</strong> {character.skin_color}</p>
      {character.homeworld && <p><strong>Homeworld:</strong> {character.homeworld}</p>}
      {character.species && <p><strong>Species:</strong> {character.species}</p>}
      <Link to="/card" className="btn btn-primary mt-3">Back to Characters</Link>
    </div>
  );
};

export default CharacterDetail;