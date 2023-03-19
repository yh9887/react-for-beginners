import Protypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({id, coverImg, title, summary, genres}){
  return(
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
    <ul>
      {genres.map((g) => 
      <li key={g}>{g}</li>
      )}
    </ul>
    </div>
  )
}
Movie.Protypes = {
  id:Protypes.number.isRequired,
  coverImg: Protypes.string.isRequired,
  title:Protypes.string.isRequired,
  summary:Protypes.string.isRequired,
  genres:Protypes.arrayOf(Protypes.string).isRequired
}
export default Movie;