import './About.css'

const About = () => {
  const name = 'Miso'
  const blurb = 'Your new favorite Discord bot'
  const description =
    'Take your Discord server to a whole new level with more than 100 commands at your disposal, ranging from fun minigames to functional server administration, utility and statistics.'
  const invite =
    'https://discord.com/oauth2/authorize?client_id=500385855072894982&permissions=8&scope=bot'

  return (
    <div className='about center'>
      <h1>
        Hi, I&apos;m <span className='about__name'>{name}.</span>
      </h1>

      <h2 className='about__role'>{blurb}.</h2>
      <p className='about__desc'>{description}</p>

      <div className='about__contact center'>
        <a href={invite}>
          <span type='button' className='btn btn--outline'>
            invite now!
          </span>
        </a>
      </div>
    </div>
  )
}

export default About
