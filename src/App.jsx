import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokedexById from './pages/PokedexById'
import Loading from './components/loading/Loading'


function App() {


  return (
    < div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:name' element={<PokedexById/>}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App
