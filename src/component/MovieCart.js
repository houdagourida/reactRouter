import React from 'react'
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const MovieCart = ({movie}) => {
    
    let {
        image,
        name,
        rating,
        date
    }=movie;
    return (
        <div className="movie-card">
        <StarRating rate={rating}/>
        <Link to={`/movieditaile/${movie.id}`}><img src={image}  alt=""  style={{height:"300px", width:"200px"}}/></Link>
        <h1>{name} </h1>
         <p>{date} </p>
         </div>
    )
}

export default MovieCart

