// Importamos la constante para no confundirnos de nombre 
import { ADD_MOVIE_FAVORITE } from "./index";


// Exportamos la funcion encargada de hacer el request de los detalles de una pelicula a la api
export default function addMovieFavorite(id) {

    return { 
        type  : ADD_MOVIE_FAVORITE,
        payload : id
    }
}
