import React, {useState} from 'react'
import Board from './Board'
import {calculateWinner} from './gameLogic'

const styles={
    width:'200px',
    margin:'20px auto',
}
const Game = () =>{
    const[board, setBoard]= useState(Array(9).fill(null));
    const [xIsNext, setXIsNext]= useState(true)
    const winner = calculateWinner(board)



    const handleClick = (i)=>{
const boardCopy = [...board]
//if user clicked on occupied square or game is over
if(winner || boardCopy[i]) return
//put  an X or O in the clicked square
boardCopy[i] = xIsNext?'X':'O';
setBoard(boardCopy);
setXIsNext(!xIsNext);

    }

    
    const renderMoves = ()=>{
return <button className="btn" onClick={()=>setBoard(Array(9).fill(null))}>
Start Game </button>
    }
return(
    <React.Fragment>
   <div  className='center' style={styles}>
<p className='timeline'>{winner ? ' Winner:' +' '+ winner : 'Next Player: ' + (xIsNext ?'X':'O')}</p>
        <Board squares ={board} onClick={handleClick}/>
     
{renderMoves()}
        </div>
        <p className="author">by Dzenan 2020</p>
    </React.Fragment>
    
)
}
export default Game