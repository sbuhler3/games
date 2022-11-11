import React from "react"

export default function Start(props){
    return(
        <>
        <h1 className="title">Quizzical</h1>
        <div className="description">Welcome to Quiziccal. 
        Press start to play a trvia game of 5 random questions.</div>
        <button className="start-game"
        onClick={props.beginGame}
        >Start</button>
        </>
        
    )
}