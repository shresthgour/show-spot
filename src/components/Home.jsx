import { React, useState, useEffect } from "react";
import Card from "./Card";

const Home = () => {
	const [shows, setShows] = useState([]);

	const updateCards = async () => {
		const URL = "https://api.tvmaze.com/search/shows?q=all";
		let data = await fetch(URL);
		let parsedData = await data.json();
		setShows(parsedData);
		setShows(parsedData.map((item) => item.show));
	};

	useEffect(() => {
		updateCards();
	}, []);

	return (
		<div className="container mt-4">
			<div className="row">
				{shows.map((element) => {
					return (
						<div className="col-md-4" key={element.url}>
							<Card
								name={element.name ? element.name : ""}
								language={element.language ? element.language : ""}
								url={element.url ? element.url : ""}
								genres={element.genres ? element.genres : ""}
								image={element.image.original ? element.image.medium : ""}
								summary={element.summary ? element.summary : ""}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
