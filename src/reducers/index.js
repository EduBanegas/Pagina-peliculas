// Importamos las constantes con los nombres de las acciones que se van a usar en el switch
import { bindActionCreators } from "redux";
import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from "../actions";


// Creamos el estado inicial para este reduce, pero como solo tendremos un estado para toda nuestra app solo definiremos un estado inicial
const initialState = {
    moviesLoader : [],
    moviesFavs : [],
    movieDetail :{}
}


export default function rootReducer(state = initialState, action) {
    
    switch (action.type) {

        case GET_MOVIES: {
            return ({
                ...state,
                moviesLoader : action.payload.Search
            })
        }

        case GET_MOVIE_DETAIL: {
            return({
                ...state,
                movieDetail : action.payload
            })
        }

        case ADD_MOVIE_FAVORITE: {
            var aux = state.moviesFavs.some((movie) => movie.Id === action.payload.Id)

            if (aux) {
                console.log("Falalallal")
            }
            else {
                return ({
                    ...state,
                    moviesFavs : [...state.moviesFavs, action.payload]
                })
            }
        }

        case REMOVE_MOVIE_FAVORITE: {
            return ({
                ...state,
                moviesFavs : state.moviesFavs.filter((movie) => {
                    return movie.Id !== action.payload
                })
            })
        }

        default : {
            return state;
        }
    }
}