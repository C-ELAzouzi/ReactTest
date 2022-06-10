import React, { useEffect, useCallback, useMemo,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../redux/actions/moviesActions";
import MovieComponent  from "./MovieComponent";
import {movies$} from "../movies";
import Pagination from "./pagination";
import  Filter  from "./Filter";

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);
  const [category,setCategory]=useState('Comedy');
  const categories = useSelector((state) => state.allMovies.category);
  const movies=useSelector((state) => state.allMovies.movies);
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    var movies=[];
    movies$.then((res)=>{
      dispatch(setMovies(res));
    });
  };
  useEffect(() => {
    fetchMovies();
  },[]);
    const indexOfLastPost = currentPage * moviesPerPage;
    const indexOfFirstPost = indexOfLastPost - moviesPerPage;
    const filtredMovies=movies.filter((item)=>item.category===category);
    const currentMovies = filtredMovies.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const filter= category=>setCategory(category);
    const move =(number,totalPages)=>{
      
      
      if((number<0 && currentPage>1) || !(number>0 && currentPage===totalPages)){
        setCurrentPage(currentPage+number)}
      }
     
      ;
    console.log(currentPage);
   
    
  return (
    <div>
    <div className="ui grid container">
      <MovieComponent movies={currentMovies} />
      </div>
      <Pagination 
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
        move={move}
      />
      <Filter category={categories} filter={filter} />   
    </div>
  );
};

export default MoviesPage;
