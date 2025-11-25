import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import CopyRight from "./CopyRight.jsx";

//create your first component
const Home = () => {
	return (
		<div>
            <NavBar />
			<Header />
			<section className="container row justify-content-between">
			<Card />
			<Card />
			<Card />
			<Card />
			</section>
			<CopyRight />
		</div>
	);
};

export default Home;