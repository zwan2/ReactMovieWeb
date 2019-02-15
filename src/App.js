import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "극한직업",
  "주먹왕 랄프2",
  "스윙키즈",
  "보헤미안랩소디"
]

const movieImages = [
  "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1547742906/dqcjjakz78fkti41ynw3.jpg",
  "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1544986706/vaoe76npsnjyv4dlwsan.jpg",
  "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1543298799/cec9wtkteak0ivnqwif7.jpg",
  "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1541140008/rx8wiydnqwtir9gwxprn.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
      < Movie title={movieTitles[0]} poster={movieImages[0]} />
      < Movie title={movieTitles[1]} poster={movieImages[1]} />
      < Movie title={movieTitles[2]} poster={movieImages[2]} />
      < Movie title={movieTitles[3]} poster={movieImages[3]} />
      
      </div>
    );
  }
}

export default App;
