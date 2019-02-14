import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster/>
            

                <h1>hello this is movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return(
            < img src = "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png"/>
        )
    }
}
export default Movie