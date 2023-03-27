import uniqid from 'uniqid'
import './Donators.css'

const Donators = ({ donators }) => {
  const github = 'https://github.com/sponsors/joinemm'
  const kofi = 'https://ko-fi.com/joinemm'
  const patreon = 'https://www.patreon.com/joinemm'

  return (
    <section className='section donators' id='donators'>
      <h2 className='section__title'>Sponsors</h2>
      <div className='donators__desc'>
        Keeping the bot online wouldn&apos;t be possible without these people.
        <br />
        You can donate on{' '}
        <a className='link' href={github}>
          Github
        </a>
        ,{' '}
        <a className='link' href={kofi}>
          Ko-Fi
        </a>{' '}
        or{' '}
        <a className='link' href={patreon}>
          Patreon
        </a>
      </div>
      <ul className='donators__list'>
        {donators &&
          donators
            .filter((user) => !user.name.startsWith('Deleted User'))
            .map((user) => (
              <li key={uniqid()} className='donators__list-item btn btn--plain'>
                <div className='skill__container'>
                  <img
                    className='user__avatar'
                    src={user.avatar}
                    alt={user.name}
                  />
                  <h4>{user.name}</h4>
                </div>
              </li>
            ))}
      </ul>
    </section>
  )
}

export default Donators
