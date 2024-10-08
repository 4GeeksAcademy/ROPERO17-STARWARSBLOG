const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			singleCharacter: null,
		},
		actions: {
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(async(data) => {
						console.log(data);
						const characters = await Promise.all(
							data.results.map(async({uid, url})=> {
								const response	= await fetch(url);
								const {description, properties} = (await response.json()).result
								return {
									uid,
									description,
									...properties
								}
							})
						)
						setStore({ characters });
					})
					.catch(err => console.error(err));
			},
			loadSinglePlanet: (id) => {
                fetch(`https://www.swapi.tech/api/planets/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        const { description, properties } = data.result;
                        setStore({ 
                            singlePlanet: {
                                uid: id,
                                description,
                                ...properties
                            }
                        });
                    })
                    .catch(err => console.error(err));
            },
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(async (data) => {
						console.log(data);
						const planets = await Promise.all(data.results.map(async ({ uid, url }) => {
							const response = await fetch(url);
							const { description, properties } = (await response.json()).result;
							return {
								uid,
								description,
								...properties
							};
						}));
						setStore({ planets });
					})
					.catch(err => console.error(err));
			},
			loadSingleCharacter: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => {
						const { description, properties } = data.result;
						setStore({ 
							singleCharacter: {
								uid: id,
								description,
								...properties
							}
						});
					})
					.catch(err => console.error(err));
			},
			CharacterFavorite: (character) => {
				const store = getStore();
				const isFavorite = store.favorites.find(fav => fav.uid === character.uid);
				
				if (isFavorite) {
					setStore({
						favorites: store.favorites.filter(fav => fav.uid !== character.uid)
					});
				} else {
					setStore({
						favorites: [...store.favorites, character]
					});
				}
			},
			PlanetFavorite: (planet) => {
				const store = getStore();
				const isFavorite = store.favorites.find(fav => fav.uid === planet.uid);
				
				if (isFavorite) {
					setStore({
						favorites: store.favorites.filter(fav => fav.uid !== planet.uid)
					});
				} else {
					setStore({
						favorites: [...store.favorites, planet]
					});
				}
			},
		}
	};
};

export default getState;