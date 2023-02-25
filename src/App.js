import React, { useEffect, useState } from 'react'

// 94de14d4
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = '[your key]';

// const movie1={
    
// 'Title': 'The Amazing Spiderman 2 Webb Cut', 
// 'Year': '2021',
// 'imdbID': 'tt18351128',
// 'Type': 'movie',
// 'Poster': 'N/A'
// }

 const App = () => {
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm]= useState('');
   
    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
          const data = await response.json();
        
          setMovies(data.Search);
    }
    
useEffect(()=>{
    searchMovies('spiderman');
},[]);

  return (
    <div className='app'>
        <h1>MovieLand</h1>
        <div className='search'>
            <input placeholder='Search for a movies'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
             />
             <img src={SearchIcon} alt="search"
             onClick={()=>searchMovies(searchTerm)} />
        </div>

           {movies?.length > 0
           ?(
            <div className="container">
                {movies.map((movie)=>(
                      <MovieCard movie1={movie}/>
                ))

                }
            </div>
           ):(
            <div className="empty">
               <h2>No movies found</h2>
            </div>
           )

           }

     
        
    </div>
  )
}

export default App;
