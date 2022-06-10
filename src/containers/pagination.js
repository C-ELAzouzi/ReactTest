import React from 'react';
import "./pagination.css";

const Pagination = ({ moviesPerPage, totalMovies, paginate,move }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
   
    <div className='pagination'>
      
      <a onClick={()=>move(-1,pageNumbers.length)}>predecent</a>
        {pageNumbers.map(number => (
        
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
         
        ))}
        <a onClick={()=>move(1,pageNumbers.length)}>suivant</a>
       
      
    </div>
 
  );
};

export default Pagination;