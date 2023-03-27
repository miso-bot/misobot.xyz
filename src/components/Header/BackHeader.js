import { ArrowBackIosNew } from '@mui/icons-material'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({ backFunction }) => {
  const avatar =
    'https://cdn.discordapp.com/avatars/500385855072894982/6364f6344f1c0eba50c6f699634407ca.webp'

  return (
    <header className='header center'>
      <div className='backbutton__container'>
        <button type='button' className='backbutton' onClick={backFunction}>
          <ArrowBackIosNew />
        </button>
      </div>
      <div className='center__container'>
        <div className='home_icon icon__centered'>
          <a href='/'>
            <img src={avatar} alt='icon' />
          </a>
        </div>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
