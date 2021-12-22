import { REMOVE_MOVIE_FAVORITE } from "./index";

export default function removeMovieFavorite(id) {

    return ({
        type : REMOVE_MOVIE_FAVORITE,
        payload : id
    })
}