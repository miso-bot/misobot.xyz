import { useContext, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const serverLink = 'https://discord.gg/YtjmhQC'
  const githubLink = 'https://github.com/joinemm/miso-bot'

  const toggleNavList = () => setShowNavList(!showNavList)

  const isHamburger = useMediaQuery('(max-width:600px)')

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {isHamburger && (
          <li className='nav__list-item'>
            <a href='/' onClick={toggleNavList} className='link link--nav'>
              Home
            </a>
          </li>
        )}

        <li className='nav__list-item'>
          <a href='/docs' onClick={toggleNavList} className='link link--nav'>
            Commands
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href={serverLink}
            onClick={toggleNavList}
            className='link link--nav'
          >
            Discord
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href={githubLink}
            onClick={toggleNavList}
            className='link link--nav'
          >
            Github
          </a>
        </li>
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
