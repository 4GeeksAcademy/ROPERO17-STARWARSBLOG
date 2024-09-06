const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: 
		{
            people: [],
            planets: [],
            vehicles: [],
            favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			
				fetchData: async (category) => {
					try {
						const resp = await fetch(`https://www.swapi.tech/api/${category}`);
						const data = await resp.json();
						setStore({ [category]: data.results });
					} catch (error) {
						console.error("Error fetching data:", error);
					}
				},
				getCharacters: () => {
					fetch("https://www.swapi.tech/api/people/")
						.then(res => res.json())
						.then(data => setStore({ characters: data.results }));
				},
				getPlanets: () => {
					fetch("https://www.swapi.tech/api/planets/")
						.then(res => res.json())
						.then(data => setStore({ planets: data.results }));
				},
				getVehicles: () => {
					fetch("https://www.swapi.tech/api/vehicles/")
						.then(res => res.json())
						.then(data => setStore({ vehicles: data.results }));
				},
				addFavorite: (item) => {
					const store = getStore();
					if (!store.favorites.includes(item)) {
						setStore({ favorites: [...store.favorites, item] });
					}
				},
				removeFavorite: (item) => {
					const store = getStore();
					setStore({ favorites: store.favorites.filter(fav => fav !== item) });
				}
			}
		};
	}
	


export default getState;
