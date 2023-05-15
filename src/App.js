import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './compoents/Navbar'
import Home from './compoents/Home'
import { ToastContainer } from 'react-toastify'
import AddEmp from './compoents/AddEmp'
import EditEmp from './compoents/EditEmp'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addemp" element={<AddEmp />} />
          <Route path="/edit/:id" element={<EditEmp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
