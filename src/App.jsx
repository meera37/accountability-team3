import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Activity from './pages/Activity'
import Login from './pages/Login';
import ActivityLister from './components/ActivityLister';
import Blog from './pages/Blog';
import KnowMore from './pages/KnowMore';
import DashBoard from './pages/DashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>

      <Header/>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<ActivityLister/>}/>
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
