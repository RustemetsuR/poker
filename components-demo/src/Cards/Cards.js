import React from 'react'


const Cards = props => {
    return (
        <div className='card'>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.suit}</span>
        </div>
        
    )
}

export default Cards;