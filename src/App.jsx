
import './App.css'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Landing from './Components/Landing'
import Adminlogin from './Pages/Adminlogin'
import Adminpage from './Pages/Adminpage'
import Maincard from './Components/Maincard'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'




function App() {


  return (
    <>
    <ToastContainer/>
      < Header / >
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Adminlogin" element={< Adminlogin />}></Route>
        <Route path="/Cards" element={< Cards />}></Route>
        <Route path="/Adminpage" element={< Adminpage/>}></Route>
        <Route path="/Maincard" element={< Maincard/>}></Route>
        

      </Routes>
      <Footer/>
     
    </>
  )
}

export default App
