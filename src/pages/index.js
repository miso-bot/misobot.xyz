import React, { useEffect, useState } from 'react'
import About from '../components/About/About'
import Stats from '../components/Stats/Stats'
import Donators from '../components/Donators/Donators'
import Loading from '../components/Loading/Loading'
import Header from '../components/Header/Header'

const Home = ({ theme }) => {
  const [appState, setAppState] = useState({
    loading: true,
    online: false,
    stats: [],
    donators: [],
  })

  useEffect(() => {
    fetch(`https://api.misobot.xyz/stats`)
      .then((response) => response.json())
      .then((data) => {
        setAppState({
          loading: false,
          stats: [
            { name: 'server count', value: data.guilds },
            { name: 'commands processed', value: data.commands },
            { name: 'user count', value: data.users },
          ],
          donators: data.donators,
          online: true,
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
        <About />
        {appState.loading ? (
          <Loading theme={theme} />
        ) : (
          <>
            <Stats stats={appState.stats} online={appState.online} />
            <Donators donators={appState.donators} />
          </>
        )}
      </main>
    </>
  )
}

export default Home
