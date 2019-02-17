import React, {} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

//class-this
function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />          
            </div>
            <div className="Movie__Columnya">       
                <h1>{title} </h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                    text = {synopsis}
                    maxLine = '3'
                    ellipsis = '...'
                    trimRight
                    basedOn = 'letters' 
                    />
                </div>
            </div>
        </div>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
//functional component
function MoviePoster({poster, alt}) {
    return(
            <img src = {poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}
function MovieGenre({genre}) {
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}
function MovieSynopsis({synopsis}) {
    return(
        <span className="Movie__Synopsis">{synopsis}</span>
    )
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenre.protoTypes = {
    genre: PropTypes.string.isRequired
}
MovieSynopsis.protoTypes = {
    synopsis: PropTypes.string.isRequired
}

export default Movie