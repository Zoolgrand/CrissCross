import React, { useState } from 'react'
import { calculateWinner } from './calculateWinner'
import Field from './Field'

import './Game.css'

const Game = () => {
    const [field, setField] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(field)
    const [turnCount, setTurnCount] = useState(1)
    const draw = !winner && turnCount === 9


    const handleClick = (index) => {
        setTurnCount(turnCount + 1)
        const fieldCopy = [...field]
        if (winner || fieldCopy[index]) return
        fieldCopy[index] = xIsNext ? 'X' : 'O'
        setField(fieldCopy)
        setXIsNext(!xIsNext)
    }

    const startGame = () => {
        setField(Array(9).fill(null))
        setXIsNext(true)
        setTurnCount(0)
    }

    const StartNewGame = ({ handleClick }) => (
        <button className="start__btn" onClick={handleClick}>Restart</button>
    );

    return (
        <div className="wrapper">
            <StartNewGame handleClick={startGame} />
            <Field squares={field} click={handleClick} />
            <p className="game__info">
                {draw ? 'Draw' : (winner ? 'Winner is ' + winner : 'Now is ' + (xIsNext ? 'X' : 'O') + ' turn ')}

            </p>
        </div>
    )
}

export default Game