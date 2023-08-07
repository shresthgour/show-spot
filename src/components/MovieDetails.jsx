import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details using the provided movie ID
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);


  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-4">{movie.name}</h2>
      <img src={movie.image?.medium} alt={movie.name} />
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: movie.summary }} />
      <p>Language: <b>{movie.language ? movie.language : "NULL"}</b></p>
      <p>Genres: <b>{movie.genres.join(', ')}</b></p>
      <p>Status: <b>{movie.status ? movie.status : "NULL"}</b></p>
      <p>Premiered: <b>{movie.premiered ? movie.premiered : "NULL"}</b></p>
      <p>Rating: <b>{movie.rating.average ? movie.rating.average : "NULL"}</b></p>
      <p>Running time: <b>{movie.runtime ? movie.runtime : "NULL"} min</b></p>
    </div>
  );
};

export default MovieDetails;