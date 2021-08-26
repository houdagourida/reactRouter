import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDitaile = ({movies}) => {
    const {x}=useParams();
    const [mov, setMov] = useState({})
    useEffect(() => {
        setMov( movies.find(elt=>elt.id===Number(x)   ))
    }, [])
    return (
        <div>
          
             <h1>{mov.desc}</h1> 
        
            
              <iframe
        width="560"
        height="315"
        src={mov.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
             <Link to="/"><button  className="btn btn-danger">cancel</button></Link>
        </div>
    )
}

export default MovieDitaile
