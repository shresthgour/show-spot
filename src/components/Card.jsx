import React, { useState } from "react";

const Card = (props) => {
	let { name, language, genres, image, summary } = props;
	const [showForm, setShowForm] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const truncateDescription = (text, maxWords) => {
		const words = text.split(" ");

		if (words.length > maxWords) {
			const truncatedText = words.slice(0, maxWords).join(" ");
			return `${truncatedText}...`;
		}

		return text;
	};

	const truncatedHTML = truncateDescription(summary, 50);

	const handleBookTicketClick = (event) => {
		event.preventDefault();
		setShowForm(true);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission logic here
		setIsSubmitted(true);
		alert("Form submitted!");
	};

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
							{showForm && !isSubmitted ? (
								<form onSubmit={handleSubmit}>
									<div className="form-group">
										<label htmlFor="title">
											Movie Name: <b>{name}</b>
										</label>
									</div>
									<div className="form-group">
										<br />
										<h4>Enter Your Details:</h4>
									</div>
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input
											type="text"
											id="name"
											name="name"
											className="form-control"
											required
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input
											type="email"
											id="email"
											name="email"
											className="form-control"
											required
										/>
									</div>
									<div className="form-group">
										<label htmlFor="phone">Phone</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											className="form-control"
											required
										/>
									</div>
									<div className="mt-2">
										<button type="submit" className="btn btn-primary">
											{isSubmitted ? "Already Booked!" : "Submit"}
										</button>
									</div>
								</form>
							) : (
								<div>
									{isSubmitted ? (
										<p className="btn btn-primary">Already Booked!</p>
									) : (
										<a
											href="/"
											onClick={handleBookTicketClick}
											className="btn btn-primary">
											Book A Ticket
										</a>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
