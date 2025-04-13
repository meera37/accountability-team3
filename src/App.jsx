import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes , Route  } from 'react-router-dom'
import Activity from './pages/Activity'

function App() {
  return (
    <>

    <Header/>
      <Routes>
          <Route path={'/activity'} element={<Activity/>} />
      </Routes>
    <Footer/>

    </>
  )
}

export default App
