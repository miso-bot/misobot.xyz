import React, { useEffect, useState } from 'react'
import Documentation from '../components/Documentation/Documentation'
import Loading from '../components/Loading/Loading'

const Docs = ({ theme }) => {
  const [appState, setAppState] = useState({
    loading: true,
    cogs: [],
  })

  useEffect(() => {
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
  }, [setAppState])

  return (
    <main>
      {appState.loading ? (
        <Loading theme={theme} />
      ) : (
        <Documentation cogs={appState.cogs} />
      )}
    </main>
  )
}

export default Docs
