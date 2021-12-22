// Importamos la constante para no confundirnos de nombre 
import { GET_MOVIE_DETAIL } from "./index";


// Exportamos la funcion encargada de hacer el request de los detalles de una pelicula a la api
export default function getMoviesDetail(id) {

    return function(dispatch) {

        return (    

            fetch(`http://www.omdbapi.com/?apikey=221c802c&i=${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: GET_MOVIE_DETAIL, payload: json})
            })
            .catch((error) =>  alert("Error", error))
        )
    } 
}
