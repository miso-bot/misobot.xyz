import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Loading from '../components/Loading/Loading'
import Donators from '../components/Donators/Donators'

const Donate = ({ theme }) => {
  const [appState, setAppState] = useState({
    loading: true,
    donators: [],
  })

  const github = 'https://github.com/sponsors/joinemm'
  const kofi = 'https://ko-fi.com/joinemm'
  const patreon = 'https://www.patreon.com/joinemm'

  useEffect(() => {
    fetch(`https://api.misobot.xyz/stats`)
      .then((response) => response.json())
      .then((data) => {
        setAppState({
          loading: false,
          donators: data.donators,
        })
      })
      .catch(() => {
        setAppState({ loading: false })
      })
  }, [setAppState])

  return (
    <>
      <Header />
      <main>
        {appState.loading ? (
          <Loading theme={theme} />
        ) : (
          <>
            <h2 className='section__title'>Donate</h2>
            <p className='donators__desc'>
              Choose your favourite donation platform to get started
            </p>
            <ul className='flexlist pad-top'>
              <li className='flexlist-item'>
                <a href={github}>
                  <span type='button' className='btn btn--outline'>
                    Github Sponsors
                  </span>
                </a>
              </li>
              <li className='flexlist-item'>
                <a href={kofi}>
                  <span type='button' className='btn btn--outline'>
                    Ko-Fi
                  </span>
                </a>
              </li>
              <li className='flexlist-item'>
                <a href={patreon}>
                  <span type='button' className='btn btn--outline'>
                    Patreon
                  </span>
                </a>
              </li>
            </ul>
            <h2 className='section__title pad-top'>
              These people are already donating
            </h2>
            <ul className='donators__list'>
              {appState.donators &&
                appState.donators
                  .filter((user) => !user.name.startsWith('Deleted User'))
                  .map((user) => (
                    <li
                      key={user.id}
                      className='donators__list-item btn btn--plain'
                    >
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
          </>
        )}
      </main>
    </>
  )
}

export default Donate
