import Protypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css"
function Movie({id, coverImg, title, summary, genres, year, poster}){
  return(
    <div className="movie">
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}
    >
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </Link>
  </div>
);
}
Movie.Protypes = {
  id:Protypes.number.isRequired,
  coverImg: Protypes.string.isRequired,
  title:Protypes.string.isRequired,
  summary:Protypes.string.isRequired,
  genres:Protypes.arrayOf(Protypes.string).isRequired
}
export default Movie;