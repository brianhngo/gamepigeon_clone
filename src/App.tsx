import "./App.css";
import Checkers from "./Game/Checkers";
import Homepage from "./Homepage/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <body className='w-screen h-screen bg-gradient-to-br from-purple-600 via-red-500 to-green-400 '>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/checkers' element={<Checkers />} />
      </Routes>
    </body>
  );
}

export default App;
