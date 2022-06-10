import React, { useEffect, useCallback, useMemo ,Component,} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { removeSelectedMovie,likeMovie,dislikeMovie } from "../redux/actions/moviesActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as LikeIcon }from "../containers/svg/likeIcon.svg";
import { ReactComponent as DislikeIcon }from "../containers/svg/dislikeIcon.svg";
const MovieComponent =({movies}) =>{
  const dispatch = useDispatch();
  const handleClick = (key) => {
    dispatch(removeSelectedMovie(key));
  };
  const handleDislike=(key)=>{
    dispatch(dislikeMovie(key));
  };
  const handleLike=(key)=>{
    console.log(key);
    dispatch(likeMovie(key));
  }
  const renderList = movies.map((product) => {
  const { id, title, category,likes,dislikes} = product;
    return (
    <div key={id}>
      <ul className="cards" >
        <li className="cards_item" >
          <div className="card" >
            <div className="card_image"></div>
            <div className="card_content">
              <h2 className="card_title">{title}</h2>
              <h3 className="card_text">Category:{category}</h3>
              <h3 className="card_text">{likes}<LikeIcon height={12} width={12}/>{dislikes}<DislikeIcon height={12} width={12}/></h3>
              <button className="btn card_btn" onClick={()=>{
                handleClick(id)}}>
                  Remove
                </button>
                <button className="btn card_btn" onClick={()=>{
                  handleLike(id)
                }}>Like</button>
                <button className="btn card_btn" onClick={()=>{handleDislike(id)}}>Dislike</button>
            </div>
          </div>
        </li>
      </ul>
    </div>   
    );
  });
  return <>{renderList}</>;
};
 
export default MovieComponent;
