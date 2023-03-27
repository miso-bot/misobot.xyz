import React, { useEffect, useState } from 'react'
import Cog from '../components/Cog/Cog'
import Loading from '../components/Loading/Loading'
import Header from '../components/Header/Header'

const Commands = ({ theme }) => {
  const [appState, setAppState] = useState({
    loading: true,
    cogs: [],
  })

  useEffect(() => {
    setAppState({ loading: true })
    fetch(`https://api.misobot.xyz/documentation`)
      .then((response) => response.json())
      .then((data) => {
        setAppState({
          loading: false,
          cogs: data,
        })
      })
      .catch(() => {
        setAppState({ loading: false })
      })
  }, [])

  return (
    <>
      <Header />
      <main className='thinner-main'>
        {appState.loading ? (
          <Loading theme={theme} />
        ) : (
          <>
            {appState.cogs.map((cog) => (
              <Cog cog={cog} />
            ))}
          </>
        )}
      </main>
    </>
  )
}

export default Commands
