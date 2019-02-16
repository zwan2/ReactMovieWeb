import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


class Movie extends Component {
    static propTypes = {
        title: PropTypes.string,
        poster: PropTypes.string,
        index: PropTypes.number
    }
    
    
    render() {
        //console.log(this.props)
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>            

                <h1>{this.props.title} </h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        console.log(this.props);
        
        return(
            <img src = {this.props.poster}/>
        )
    }
}
export default Movie