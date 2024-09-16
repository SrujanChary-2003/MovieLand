// import {useState, useEffect} from 'react';
// import './App.css';
// /*const Person = (props) => {
//  return (
//   <>
//   <h1>Name: {props.name}</h1>
//   <h2>FirstName: {props.FirstName}</h2>
//   <h2>LastName: {props.LastName}</h2>
//   <h2>Age: {props.Age}</h2>
//   </>
//  )
// } */
// const App=() => {

//   const [counter, setCounter] = useState(0);
//   useEffect( ()=> {
//      alert('You have changed the counter to '+counter)
//     //setCounter(100)
//   },[counter])
//   return (
//     <div className='App'>
//         {/* <Person name={'Srujan'}  FirstName={'Padakanti'} LastName={'Chary'} Age={21}/> */}
//       <button onClick={() => setCounter((prevCount)=>prevCount-1)}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={()=> setCounter((currCount)=> currCount+1)}>+</button>
//     </div>
//   )
// }

// export default App;


import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
//import './App.css';
import './app1.css';
import Moviecard from './MovieCard';
import SearchIcon from './Search.svg';
const API_URL = 'http://omdbapi.com?apikey=8ddda716'

const App =() => {
  const [movies,setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('Baahubali')
  },[])
  return (
    <div className='app'>
      <h1>
        MovieLand
      </h1>
      <div className='search'>
        <input type="search" placeholder='Search for movie..' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" onClick={()=> searchMovies(searchTerm)} />
      </div>
      {
        movies?.length>0
        ? (
          <div className='container'>
        {
          movies.map((movie)=> (
            <Moviecard movie={movie}/>
          ))
        }
      </div>
        ): (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }
    </div>
  )
}

export default App;