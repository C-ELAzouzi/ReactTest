import { ActionTypes } from "../constants/action-types";

export const setMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ActionTypes.SELECTED_MOVIE,
    payload: movie,
  };
};
export const removeSelectedMovie = (key) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_MOVIE,
    payload:key,
  };
};
export const likeMovie=(key)=>{
  return {
    type:ActionTypes.LIKE_MOVIE,
    payload:key,
  };
};
  export const dislikeMovie=(key)=>{
    return {
      type:ActionTypes.DISLIKE_MOVIE,
      payload:key,
    };

}
export const filterMoviesByCat=(category)=>{
  return {
    type:ActionTypes.FILTER_MOVIES_CAT,
    payload:category,
  }
}
