import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 
import "../../styles/home.css";

export const CardList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    console.log("Loading characters...");
    actions.loadCharacters();
  }, [actions]);

  if (!store.characters.length) {
    return <div>Loading...</div>;
  }

  const getCharacterImageUrl = (character) => {
    return `https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`;
  };

  const handleFavorite = (character) => {
    actions.CharacterFavorite(character);
  };

  return (
    <div className="container">
      <div className="card-list-container">
        <div className="card-list row flex-nowrap overflow-auto">
          {store.characters.map(character => (
            <div className="card" key={character.uid}>
              <img src={getCharacterImageUrl(character)} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-content">
                  {character.birth_year && `Birth Year: ${character.birth_year}`}
                  {character.eye_color && ` Eye Color: ${character.eye_color}`}
                  {character.gender && ` Gender: ${character.gender}`}
                </p>
                <div className="button-container">
                <Link to={`/character/${character.uid}`} className="btn btn-info">Details</Link>
                  <button className="btn btn-outline-warning" onClick={() => handleFavorite(character)}>
                    {store.favorites.some(fav => fav.uid === character.uid) ? "★" : "☆"}
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