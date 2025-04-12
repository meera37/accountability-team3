import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element={ <Register/>}/>
    </Routes>
   
    <Footer/>
      
    </>
  )
}

export default App
