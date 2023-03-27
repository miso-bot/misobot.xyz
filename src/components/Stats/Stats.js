import uniqid from 'uniqid'
import CountUp from 'react-countup'
import './Stats.css'

const Stats = ({ stats, online }) => {
  const formatter = Intl.NumberFormat('en', { notation: 'standard' })
  const status = { status: online }
  status.text = online ? 'Online' : 'Offline'
  return (
    <section id='stats' className='section stats'>
      {stats && (
        <div className='stats__grid'>
          {stats.map((stat) => (
            <div className='stat' key={uniqid()}>
              <h5>{stat.name}</h5>
              <h2>
                <CountUp
                  end={stat.value}
                  duration={2}
                  formattingFn={formatter.format}
                  useEasing
                />
              </h2>
            </div>
          ))}
        </div>
      )}
      <div className='status'>
        <div
          className={`status-indicator ${status.status ? 'online' : 'offline'}`}
        >
          <span className='blink' />
        </div>
        <h5 className='status-text'>{status.text}</h5>
      </div>
    </section>
  )
}

export default Stats
