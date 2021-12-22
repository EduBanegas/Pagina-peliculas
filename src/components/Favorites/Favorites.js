import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import './Favorites.css';

import removeMovieFavorite from "../../actions/removeMovieFavorite";


export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.moviesFavs.map((movie)=> (
                <li key ={movie.Id}>
                  
                  <Link to = {`/movie/${movie.Id}`}>
                    <img src={movie.Img} alt="img" />
                    {movie.Title}
                  </Link>

 
                  <button onClick = {() => this.props.removeMovieFavorite(movie.Id)}>
                    Quitar de favoritos
                  </button>

                </li>
            ))
          }
        </ul>
      </div>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return {
    removeMovieFavorite : (id) => dispatch(removeMovieFavorite(id))
  }
}

function mapStateToProps (state) {
  return {
    moviesFavs : state.moviesFavs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
