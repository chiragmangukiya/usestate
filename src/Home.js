import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div className="all_btn">
      <Link to="/" className='btn-theme'>Simple</Link>
      <Link to="calc" className='btn-theme'>Calc</Link>
      <Link to="calculator" className='btn-theme'>Calculator</Link>
      <Link to="tictac" className='btn-theme'>Tic Tac Toe</Link>
      <Link to="puzzle" className='btn-theme'>Puzzle</Link>
      <Link to="todo" className='btn-theme'>ToDo List</Link>
      <Link to="result" className='btn-theme'>Student Result</Link>
      <Link to="register" className='btn-theme'>Student Registration</Link>
    </div>
    </>
  )
}

export default Home