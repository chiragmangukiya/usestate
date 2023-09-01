import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Simple from './Task/Simple';
import Home from './Home';
import Calc from './Task/Calc';
import Calculator from './Task/Calculator';
import TicTacToe from './Task/TicTacToe';
import Puzzle from './Task/Puzzle';
import Todo from './Task/Todo';
import Result from './Task/Result';
import Frm from './Task/Frm';

function App() {

  return (
    <>
      
      <Home />

      <div className="App">
        <Routes>
          <Route path="/" element={ <Simple /> } />
          <Route path="calc" element={ <Calc /> } />
          <Route path="calculator" element={ <Calculator /> } />
          <Route path="tictac" element={ <TicTacToe /> } />
          <Route path="puzzle" element={ <Puzzle /> } />
          <Route path="todo" element={ <Todo /> } />
          <Route path="result" element={ <Result /> } />
          <Route path="register" element={ <Frm /> } />
        </Routes>
      </div>


    </>
  );
}

export default App;
