import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 
import "../../styles/home.css";

export const CardList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCharacters();
  }, [actions]);

  if (!store.characters.length) {
    return <div>Loading...</div>;
  }

  const getCharacterImageUrl = (url) => {
    const id = url.split("/").filter(Boolean).pop();
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  };

  return (
    <div className="container">
      <div className="card-list-container">
        <div className="card-list row flex-nowrap overflow-auto">
          {store.characters.map(character => (
            <div className="card" key={character.uid}>
              <img src={getCharacterImageUrl(character.url)} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-content">{character.birth_year} {character.eye_color} {character.gender}</p>
                <Link to={`./views/characterdetail${character.uid}`} className="btn btn-primary">Ver detalle</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};