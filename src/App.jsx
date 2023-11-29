import './App.css'
import { Routes, Route } from "react-router-dom";

import Homepage from './views/Homepage';
import About from './views/About';
import Error from './views/Error';

function App() {

  return (
    <Routes>
      <Route path='/branch-example' element={ Homepage } />
      <Route path='/om' element={ About } />
      <Route path='/*' element={ Error } />
    </Routes>
  )
}

export default App
