import React from 'react'

import './Field.css'
import Square from './Square'

const Field = ({ squares, click }) => {
    return (
        <div className="field">
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => click(i)} />
                ))
            }
        </div>
    );
}

export default Field