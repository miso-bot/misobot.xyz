import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const avatar =
    'https://cdn.discordapp.com/avatars/500385855072894982/6364f6344f1c0eba50c6f699634407ca.webp'

  return (
    <header className='header center'>
      <div className='home_icon'>
        <a href='/'>
          <img src={avatar} alt='icon' />
        </a>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
