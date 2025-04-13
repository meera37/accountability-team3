import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header/>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
