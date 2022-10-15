import './Footer.css'
import AvainLippuWhite from '../../images/avainlippu_white.webp'
import AvainLippuBlue from '../../images/avainlippu_blue.webp'

const Footer = ({ theme }) => {
  const footerLink = 'https://github.com/joinemm'
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__flag'>
          <img
            src={theme === 'dark' ? AvainLippuWhite : AvainLippuBlue}
            alt='Made in Finland'
            width={100}
          />
        </div>
        <div className='footer__center'>
          <a href={footerLink} className='link footer__link'>
            Created by Joinemm#7184
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
