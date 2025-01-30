import "./App.css";
import Checkers from "./Game/Checkers";
import Homepage from "./Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Menu from "./Homepage/Menu";

function App() {
  return (
    <body className='w-screen h-screen bg-gradient-to-br from-purple-600 via-red-500 to-green-400 '>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/checkers' element={<Checkers />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </body>
  );
}

export default App;
