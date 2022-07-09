import React, { useState } from 'react'
import Board from './Board'

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const isWin = (board) =>{
    for(let i=0; i < winPattern.lenght; i++){
        let[a,b,c] = winPattern[i]
        if(board[a] && board[a] === board[b] && board[b] === board[c]){
            return true
        }
    }
    return false
}

const isDraw = (board) =>{
    return board.fillter(box => !box).lenght === 0
}

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(""))
    const [gameStop, setGameStop] = useState(false)
    const [message, setMessage] = useState('Tic toa toe')
    const players = {
        human: 'X',
        computer: 'O'
    }
    const handleClick= (pos) =>{
        if(gameStop){
            return
        }
        if(board[pos]){
            return 
        }
        const boardCopy = {...board}
        boardCopy[pos]= players.human
        setBoard(boardCopy)

        if(isWin(boardCopy)){
            setMessage(`Win ${players.human}`)
            setGameStop(true)
            return
        }

        if(isDraw(boardCopy)){
            setMessage(`Draw`)
            setGameStop(true)
            return
        }


    }
    return (
        <div>
            <h3>{message}</h3>
            <Board value={board} onClick={handleClick} />
        </div>
    )
}

export default Game
