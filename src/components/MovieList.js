import React, { useState } from 'react'
import MovieCard from './MovieCard'
import Modal from 'react-modal'
import './MovieList.css'

function MovieList(props) {
    //STATES
    const [movieData2, setMovieData2] = useState(props.item)
    const [tmpMovieData2, setTmpMovieData2] = useState(movieData2)
    const [toggleModal, setToggleModal] = useState(false)
    const [nameMovie, setNameMovie] = useState('')
    const [lengthMovie, setLengthMovie] = useState('')
    const [ratingMovie, setRatingMovie] = useState('')
    const [searchMovie, setSearchgMovie] = useState('')
    const [picMovie, setPicMovie] = useState('')
    //FCTS
    const handleSaveModal = () => {
        console.log('test true')
        if (nameMovie !== '' && lengthMovie !== '' && ratingMovie !== '' && !isNaN(ratingMovie)) {
            setMovieData2([...movieData2, { id: 0, name: nameMovie, length: lengthMovie, rating: ratingMovie, pic: picMovie }])
            setTmpMovieData2([...movieData2, { id: 0, name: nameMovie, length: lengthMovie, rating: ratingMovie, pic: picMovie }])
            setToggleModal(!toggleModal)
        }
    }
    const handleName = (e) => {
        setNameMovie(e.target.value)
    }

    const handleLength = (e) => {
        setLengthMovie(e.target.value)
    }

    const handleRating = (e) => {
        setRatingMovie(e.target.value)
    }

    const handlePic = (e) => {
        setPicMovie(e.target.value)
    }

    const handleSearch = (e) => {
        if(e.target.value==='')
        setMovieData2(movieData2)
        setSearchgMovie(e.target.value)
        matchMovie()
    }

    const matchMovie = () => {
        if (searchMovie === '' || movieData2.filter(el => searchMovie.toUpperCase() === el.name.toUpperCase()).length < 1)
            setMovieData2(tmpMovieData2)
        else
            setMovieData2(movieData2.filter(el => el.name.toUpperCase() === searchMovie.toUpperCase()))
    }

    const dataMap = movieData2.map(el => <MovieCard key={el.id} {...el} />)

    Modal.setAppElement('#root')

    return (
        <div className='MovieListContainer'>
            <div className='NavBar'>
                <button className='AddButton' onClick={() => setToggleModal(true)}>+</button>
                <Modal isOpen={toggleModal} onRequestClose={() => setToggleModal(false)}>
                    <h1>Add a movie</h1>
                    <input type='text' value={nameMovie} onChange={handleName} placeholder='Movie title' />
                    <br />
                    <input type='number' value={lengthMovie} onChange={handleLength} placeholder='Movie length' />
                    <br />
                    <input type='text' value={ratingMovie} onChange={handleRating} placeholder='Movie rating' />
                    <br />
                    <label>Movie cover </label>
                    <input type='file' value={picMovie} onChange={handlePic} />
                    <hr />
                    <button onClick={handleSaveModal}>Save</button>
                    <button onClick={() => setToggleModal(false)}>Cancel</button>
                </Modal>
                <div className='Search'>
                    <button onClick={matchMovie}>Search</button>
                    <input type='text' value={searchMovie} onChange={handleSearch} placeholder='Search a Movie'></input>
                </div>
            </div>
            <div className='MovieList'>
                {dataMap}
            </div>
            <hr />
            <h1>{nameMovie}</h1>
        </div>
    )
}

export default MovieList
