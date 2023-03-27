import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'
import Home from './pages'
import Commands from './pages/commands'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Routes>
          <Route exact path='/' element={<Home theme={themeName} />} />
          <Route path='/commands' element={<Commands theme={themeName} />} />
        </Routes>

        <ScrollToTop />
        <Footer theme={themeName} />
      </div>
    </Router>
  )
}

export default App
