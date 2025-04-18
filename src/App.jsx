import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Activity from './pages/Activity'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Blog from './pages/Blog';
import KnowMore from './pages/KnowMore';
import DashBoard from './pages/DashBoard';

function App() {

  return (
    <>

      <Header/>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/register' element={<Register />} />
            <Route path={'/activity'} element={<Activity/>} />
            <Route path={'/blog'} element={<Blog/>} />
            <Route path={'/knowmore'} element={<KnowMore/>} />
            <Route path={'/dashboard'} element={<DashBoard/>} />
        </Routes>
      <Footer />

    </>
  )
}

export default App
