import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import addMovieFavorite from "../../actions/addMovieFavorite ";
import getMovies from "../../actions/getMovies";

import './Buscador.css';




export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    this.setState({title : ""})
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            this.props.movies.map((movie)=> (
                <li key ={movie.imdbID}>
                  
                  <Link to = {`/movie/${movie.imdbID}`}>
                    <img src={movie.Poster} alt="img" />
                    {movie.Title}
                  </Link>

                  <Link to = {`/favs`}>
                    <button onClick = {() => this.props.addMovieFavorite({Title:movie.Title,Id:movie.imdbID,Img:movie.Poster})}>
                      Agregar a favotioros
                    </button>
                  </Link>
                    

                </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

// Pasamos la funcion al connect para agregar las acciones a este componente
function mapDispatchToProps(dispatch) {
  return {
    getMovies : (title) => dispatch(getMovies(title)),
    addMovieFavorite : (id) => dispatch(addMovieFavorite(id))
  }
}

// Pasamos las propiedades del estado como propiedades al componente
function mapStatetToProps(state) {
    return {

      movies : state.moviesLoader
    }
}

export default connect(mapStatetToProps, mapDispatchToProps)(Buscador);