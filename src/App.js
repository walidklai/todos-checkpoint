import React, { useState } from 'react'
import MovieList from './components/MovieList'

function App() {
  const [movieData ,setMovieData]=useState([
    {id:1 ,name:'first movie' ,length:125 ,rating:7 ,pic:'https://source.unsplash.com/random'},
    {id:2 ,name:'second movie' ,length:125 ,rating:8 ,pic:'https://source.unsplash.com/random'},
    {id:3 ,name:'third movie' ,length:125 ,rating:7 ,pic:'https://source.unsplash.com/random'},
    {id:4 ,name:'fourth movie' ,length:125 ,rating:7 ,pic:'https://source.unsplash.com/random'},
    {id:5 ,name:'fifth movie' ,length:125 ,rating:2 ,pic:'https://source.unsplash.com/random'}
  ])
  return (
    <div>
      <h1>Movies</h1>
      <hr/>
      <MovieList item={movieData}/>
    </div>
  )
}

export default App

//there are too much cases to consider when it comes to the search function or the add function ,i just did the basic stuff ,once i'll have more time i will cover more details for now i have a deadline
