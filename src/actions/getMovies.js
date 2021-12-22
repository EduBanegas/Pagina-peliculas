// Importamos nombre de la accion 
import { GET_MOVIES } from "./index";


// Exportamos la funcion que nos request a la api
export default function getMovies(title) {

    return function (dispatch) {

        return (
            
            fetch(`http://www.omdbapi.com/?apikey=221c802c&s=${title}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: GET_MOVIES, payload: json})
            })
            .catch((error) =>  alert("Error", error))
        )
    }
}