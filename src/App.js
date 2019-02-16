import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




// Render: componentWillMount() -> render() -> componentDidMount()
// Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()


class App extends Component {

  state = {
    greeting: "Hello~",
    movies: [{
        title: "극한직업",
        poster: "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1547742906/dqcjjakz78fkti41ynw3.jpg"
      },
      {
        title: "주먹왕 랄프2",
        poster: "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1544986706/vaoe76npsnjyv4dlwsan.jpg"
      },
      {
        title: "스윙키즈",
        poster: "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1543298799/cec9wtkteak0ivnqwif7.jpg"
      },
      {
        title: "보헤미안 랩소디",
        poster: "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1541140008/rx8wiydnqwtir9gwxprn.jpg"
      }
    ]
  };
  
  componentWillMount() {
    console.log("willMount");
  }

  componentDidMount() {
    //state를 직접 쓰면 안됨!!
    setTimeout(() => {
      this.setState({

      
        movies: [
          ...this.state.movies,
          {
            title: "국가부도의 날",
            poster: "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1543986878/loidyr3fxuef0rpyybr0.jpg"
          }
        ]
      })
      console.log("hi~~");
    }, 3000);
    console.log("didMount");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title = {movie.title} poster= {movie.poster} key = {index} />
        })}

  
      </div>
    );
  }
}

export default App;
