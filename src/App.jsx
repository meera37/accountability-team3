import { Route, Routes , Navigate  } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Activity from './pages/Activity'
import Login from './pages/Login';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import DashBoard from './pages/DashBoard';
import Mgrid from './components/Mgrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useNavigate  } from 'react-router-dom';
import Explore from './components/Explore';
import PageNotFound from './pages/PageNotFound';
import { useEffect, useState } from 'react';


function App() {
  const navigate = useNavigate();
  const isUserLogged = JSON.parse(localStorage.getItem('userLogged'))
  const currentUser = localStorage.getItem('curUser')
  const [ dp , setDp ] = useState("")
  const names = ['Valentina','Jade','Alexander','Jameson','Mason','Emery','Robert','Aidan','Jessica','Easton','Christopher','Liliana','Jocelyn','Wyatt','Eden','Vivian','Ryan','Maria','Caleb','Adrian']


  useEffect(()=>{
    const picture = localStorage.getItem('dp')
    console.log(picture)
    if(picture){
      setDp(picture)
    }
  },[])

  return (
    <>
      <Header dp={dp} />
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
                  <DashBoard setDp={setDp} />
                  :
                  <Navigate to="/"/>
                } />

            <Route
                path={`/u/:username`}
                element={ isUserLogged?
                    <DashBoard setDp />
                  :
                  <Navigate to="/" />
                  } />

            <Route
                path='/login'
                element= { isUserLogged? <Navigate to='/dashboard' />: <Login setDp={setDp} /> }
                />

            <Route path={'/blogs'} element={<Blog/>} />
            <Route path={'/blogs/:blogslug'} element={<BlogDetail/>} />
            <Route path={'/dashboard'} element={<DashBoard setDp={setDp}  names={names} />} />

            <Route path='/login' element={<Login setDp={setDp} />}/>
            <Route path='/register' element={<Register names={names} />} />
            <Route path={'/activity'} element={<Activity />} />



            <Route path={'/mgrid'} element={<Mgrid/>} />
            <Route path={'/explore'} element={<Explore/>} />
            <Route path={'*'} element={<PageNotFound/>}/>

        </Routes>
      { !isUserLogged &&  <Footer />}
    </>
  )
}

export default App
