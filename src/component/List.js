import React from 'react'
import MovieCart from './MovieCart'
// import MovieDitaile from './MovieDetails'

const List = ({films , filmss}) => {
    return (
        <div className="movie-list">
        {films.map(
        (elmt) => <MovieCart movie={elmt} />
     )}  
     {/* {
         filmss.map(
             (elmtt)=> <MovieDitaile movie={elmtt}/>
         )
     } */}
            
        </div>
    )
}

export default List
