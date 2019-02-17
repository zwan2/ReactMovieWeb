import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




// Render: componentWillMount() -> render() -> componentDidMount()
// Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()


class App extends Component {

  state = {
  };
  
  componentWillMount() {
    console.log("willMount");
  }

  componentDidMount() {
    this._getMovies();
    this._callAPI();
  }
  _getMovies = async () => {
    const movies = await this._callAPI();

    //callAPI() 완료되기 전까지 실행되지 않음
    this.setState({
      movies: movies
    });
  }

  _callAPI = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {

      return <Movie 
        title = {movie.title_english} 
        poster = {movie.medium_cover_image} 
        key = {movie.id} 
        genres = {movie.genres}
        synopsis = {movie.synopsis} 
        />
    })
    return movies
  }

  render() {
    console.log("render");
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
          {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
