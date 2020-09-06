import React, { useState } from 'react'
import './MovieCard.css'

function MovieCard(props) {
    return (
        <div className='MovieCard'>
            <img src={props.pic} width='200px' height='200px' />
            <h2 className='moviename'>{props.name}</h2>
            <hr/>
            <h4>{props.length} min</h4>
            <h4 style={{color :props.rating>7 ? 'lightgreen' : (props.rating>3&&props.rating<=7)? 'orange' : 'red'}}>{props.rating}/10</h4>
        </div>
    )
}

export default MovieCard
