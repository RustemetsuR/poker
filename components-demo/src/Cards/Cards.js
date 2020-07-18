import React from 'react'

const Cards = props => {
    return (
        <div className="card" className={props.rank, props.suit}>
            <span className="rank">{props.rankText}</span>
            <span className="suit">{props.suit}</span>
        </div>
    )
}

export default Cards;