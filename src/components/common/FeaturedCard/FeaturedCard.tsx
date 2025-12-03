import "./MovieCard.scss"

export interface Movie {
    Title: string
    Poster: string
    Rated: string
    Year: string
    Genre: string
    Plot: string
    Writer: string
    Director: string
    Actors: string // comma-separated string from API
}

interface MovieCardProps {
    movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
    const actors = movie.Actors ? movie.Actors.split(",") : []

    return (
        <div className="movie" id="movie-card">
            <div className="movie__data" id="movie-data">
                {/* Poster column */}
                <div className="movie__poster">
                    <span className="movie__poster--fill">
                        <img src={movie.Poster} alt={`${movie.Title} background`} />
                    </span>

                    <span className="movie__poster--featured">
                        <img src={movie.Poster} alt={`${movie.Title} featured poster`} />
                    </span>
                </div>

                {/* Details column */}
                <div className="movie__details">
                    <h2 className="movie__title">{movie.Title}</h2>

                    <ul className="movie__tags list--inline">
                        <li className="movie__rated">{movie.Rated}</li>
                        <li className="movie__year">{movie.Year}</li>
                        <li className="movie__genre">{movie.Genre}</li>
                    </ul>

                    <p className="movie__plot">{movie.Plot}</p>

                    <div className="movie__credits">
                        <p>
                            <strong>Written by:</strong> {movie.Writer}
                        </p>
                        <p>
                            <strong>Directed by:</strong> {movie.Director}
                        </p>

                        <p>
                            <strong>Starring:</strong>
                        </p>

                        <ul className="movie__actors list--inline">
                            {actors.map((actor) => (
                                <li key={actor.trim()}>{actor.trim()}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
