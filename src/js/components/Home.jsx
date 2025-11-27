import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import CopyRight from "./CopyRight.jsx";

//create your first component
const Home = () => {
	const imgOne = "https://www.rollingstone.com/wp-content/uploads/2020/06/Lamb-of-God-2-Travis-Shinn-resized.jpg";
	const imgTwo = "https://www.futuro.cl/wp-content/uploads/2022/04/type-o-negative-1993-web.jpg";
	const imgThree = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EmKSMXvp30tFTfwGR_wxu2SfIqX8pFOYdiQoU2hXLxAAuKh506lB8j5NC_TyE5JD3rcY9hRRCTYWLqFJAXGhTw-U36swul8NjUReUw&s=10";
	const imgFour = "https://m.media-amazon.com/images/I/61kjB5d-eCL._AC_UF1000,1000_QL80_.jpg";

	return (
		<div>
            <NavBar />
			<Header />
			<section className="container px-0 mb-5">
			<div className="row">
			<Card img={imgOne} title="Lamb Of God" description="Lamb of God es una banda estadounidense de groove metal y thrash metal formada en Richmond, Virginia." wiki="https://es.wikipedia.org/wiki/Lamb_of_God"/>
			<Card img={imgTwo} title="Type O' Negative" description="Type O Negative fue una banda de Brooklyn, Nueva York, formada en 1989." wiki="https://es.wikipedia.org/wiki/Type_O_Negative"/>
			<Card img={imgThree} title="Black Sabbath" description="Black Sabbath fue una banda británica de heavy metal y hard rock formada en 1968 en Birmingham por Tony Iommi, Ozzy Osbourne, Geezer Butler y Bill Ward." wiki="https://es.wikipedia.org/wiki/Black_Sabbath"/>
			<Card img={imgFour} title="My Chemical Romance" description="My Chemical Romance es una banda estadounidense de rock, formada en 2001 en el estado de Nueva Jersey." wiki="https://es.wikipedia.org/wiki/My_Chemical_Romance"/>
			</div>
			</section>
			<CopyRight />
		</div>
	);
};

export default Home;

// body en negro, header "hall of fame" las cards con 4 bandas de musica, con titulo de banda, 
// en descriccion colocar de donde son, y agregar url de wikipedia en el botton.
// lamb of god https://www.rollingstone.com/wp-content/uploads/2020/06/Lamb-of-God-2-Travis-Shinn-resized.jpg
// type o negative https://www.futuro.cl/wp-content/uploads/2022/04/type-o-negative-1993-web.jpg
// black sabbath https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EmKSMXvp30tFTfwGR_wxu2SfIqX8pFOYdiQoU2hXLxAAuKh506lB8j5NC_TyE5JD3rcY9hRRCTYWLqFJAXGhTw-U36swul8NjUReUw&s=10
// my chemical romance https://m.media-amazon.com/images/I/61kjB5d-eCL._AC_UF1000,1000_QL80_.jpg
