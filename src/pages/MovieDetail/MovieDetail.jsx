import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieService.js";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovie() {
    const { data } = await MovieService.getMovieDetails(id);
    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    console.log(movie);
  });

  return (
    <div className="movie-detail">
      <div className="movie-detail__container">
        <div className="movie-detail__col">
          <h1 className="movie-detail__title">{movie.title}</h1>
          <div className="movie-detail__image">
            <img
              src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="movie-detail__col">
          <div className="movie-detail__details">
            <div className="movie-detail__detail">
              <span>Budget:</span> {movie.budget}
            </div>
            <div className="movie-detail__detail">
              <span>Idioma original:</span> {movie.original_language}
            </div>
            <div className="movie-detail__detail">
              <span>Popularidade:</span> {movie.popularity}
            </div>
            <div className="movie-detail__detail">
              <span>Overvier:</span> {movie.overview}
            </div>
          </div>
          <Link to={"/"} className="movie-detail__button">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
