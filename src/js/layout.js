import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { CardList } from "./views/cardlist";
import { PlanetList } from "./views/planetlist";
import { CharacterDetail } from "./views/characterdetail.js";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import injectContext from "./store/appContext.js";

const Layout = () => {
	const basename = process.env.BASENAME || "";
  
	return (
	  <div>
		<BrowserRouter basename={basename}>
		  <ScrollToTop>
			<Navbar />
			<Routes>
			  <Route path="/" element={<Home />} />
			  <Route path="/demo" element={<Demo />} />
			  <Route path="/card" element={<CardList />} />
			  <Route path="/planet" element={<PlanetList />} />
			  <Route path="/single/:theid" element={<Single />} />
			  <Route path="/character/:id" element={<CharacterDetail />} />
			  <Route path="*" element={<h1>Not found!</h1>} />
			</Routes>
			<Footer />
		  </ScrollToTop>
		</BrowserRouter>
	  </div>
	);
  };

export default injectContext(Layout);
