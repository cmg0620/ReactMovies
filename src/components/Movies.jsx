import { Movie } from "./Movie";

function Movies(props) {
    const {movies = []} = props;

    return (
         <div className="movies">
            {movies.length ? (
                movies.map((movie) => 
            <Movie key={movie.imdbID} {...movie}/>)
        ) : (
            <h5>Не найдено ни одного фильма</h5>
        )}
    </div>
    );
}

export {Movies};