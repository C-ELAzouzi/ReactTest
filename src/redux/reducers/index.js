import { combineReducers } from "redux";
import { moviesReducer} from "./moviesReducer";
const reducers = combineReducers({
  allMovies: moviesReducer,
});
export default reducers;
