import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Add from './Add'
import Result from './Result'
import Nav from './Nav'
import './App.css';
const App=()=>{
  return(
    <BrowserRouter>
    <h1>Result Portal</h1>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
  
    </BrowserRouter>
  )
}
export default App;






