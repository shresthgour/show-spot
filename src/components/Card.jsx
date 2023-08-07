import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
	let { id, name, language, genres, image, summary } = props;

	const truncateDescription = (text, maxWords) => {
		const words = text.split(" ");

		if (words.length > maxWords) {
			const truncatedText = words.slice(0, maxWords).join(" ");
			return `${truncatedText}...`;
		}

		return text;
	};

	const truncatedHTML = truncateDescription(summary, 50);

	const handleSubmit = (event) => {};

	return (
		<>
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={image} className="img-fluid rounded-start" alt={name} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{name}</h5>
							<div className="card-text">
								<div dangerouslySetInnerHTML={{ __html: truncatedHTML }} />
							</div>
							<p className="card-text">
								<small className="text-body-secondary">
									Genre: {genres.join(", ")} <br />
									Language: {language}
								</small>
							</p>
							<div className="mt-2">
								<Link to={`/movie/${props.id}`} className="btn btn-primary">
									More Details
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
