import { ActionTypes } from "../constants/action-types";
const intialState = {
  movies: [],
  category:[]
};

export const moviesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      const arrayCat = [...new Set(payload.map(p => p.category))];
      return { ...state,movies: payload,category:arrayCat };
    case ActionTypes.REMOVE_SELECTED_MOVIE:
     return {
      ...state,
      movies:state.movies.filter(item => item.id !== payload)
    };
    case ActionTypes.LIKE_MOVIE:
      const newArray = [...state.movies] ;
      const index=parseInt(payload)-1;
      newArray[index].likes=newArray[index].likes+1;
     return {
      ...state,
      movies:newArray,
     };
     case  ActionTypes.DISLIKE_MOVIE:
      const newArray_ = [...state.movies] ;
      const index_=parseInt(payload)-1;
      newArray_[index_].dislikes=newArray_[index_].dislikes+1;
     return {
      ...state,
      movies:newArray_,
     };
    default:
      return state;
  }
};

