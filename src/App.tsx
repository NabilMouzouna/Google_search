import {Routes , Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Search from './pages/Search'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='*' element={<Search/>}/>
    </Routes>
  )
}

export default App
