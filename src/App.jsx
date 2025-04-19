import { Route, Routes , Navigate  } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Activity from './pages/Activity'
import Login from './pages/Login';
import ActivityLister from './components/ActivityLister';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import DashBoard from './pages/DashBoard';
import Mgrid from './components/Mgrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useNavigate  } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const isUserLogged = JSON.parse(localStorage.getItem('userLogged'))
  const currentUser = localStorage.getItem('curUser')
  return (
    <>
      <Header/>
        <Routes>

            <Route
                path='/'
                element={ isUserLogged?
                  <Navigate to="/dashboard" />
                  :
                  <Landing />
                } />

            <Route
                path='/dashboard'
                element={ isUserLogged?
                  <DashBoard/>
                  :
                  <Navigate to="/"/>
                } />

            <Route path={'/blogs'} element={<Blog/>} />
            <Route path={'/blogs/:blogslug'} element={<BlogDetail/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<ActivityLister/>}/>
            <Route path={'/activity'} element={<Activity/>} />
            <Route path={'/dashboard'} element={<DashBoard/>} />
            <Route path={'/mgrid'} element={<Mgrid/>} />

        </Routes>

      { !isUserLogged &&  <Footer />}

    </>
  )
}

export default App
