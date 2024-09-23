import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { CardList } from "./views/cardlist";
import { PlanetList } from "./views/planetlist";
import  CharacterDetail  from "./views/characterdetail.js";
import  PlanetDetail  from "./views/planetdetail";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import injectContext from "./store/appContext.js";

// Componente de carga global
const LoadingSpinner = () => <div>Loading...</div>;

const Layout = () => {
	const basename = process.env.BASENAME || "";
  
	return (
	  <div>
		<BrowserRouter basename={basename}>
		  <ScrollToTop>
			<Navbar />
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
				  <Route path="/" element={<Home />} />
				  <Route path="/demo" element={<Demo />} />
				  <Route path="/card" element={<CardList />} />
				  <Route path="/planet" element={<PlanetList />} />
				  <Route path="/single/:theid" element={<Single />} />
				  <Route path="/character/:id" element={<CharacterDetail />} />
				  <Route path="/planet/:id" element={<PlanetDetail />} />
				  <Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</Suspense>
			<Footer />
		  </ScrollToTop>
		</BrowserRouter>
	  </div>
	);
  };

export default injectContext(Layout);