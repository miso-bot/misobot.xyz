import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'
import Home from './pages'
import Docs from './pages/docs'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home theme={themeName} />} />
          <Route path='/docs' element={<Docs theme={themeName} />} />
        </Routes>

        <ScrollToTop />
        <Footer theme={themeName} />
      </div>
    </Router>
  )
}

export default App
