
import './App.css'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <div className=''>
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
      </Routes>
      </BrowserRouter> */}
      <Navbar/>
      <Home/>
      <ToastContainer/>
    </div>
  )
}

export default App