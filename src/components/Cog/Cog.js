import uniqid from 'uniqid'
import Subcommand from '../Subcommand/Subcommand'
import './Cog.css'

const Cog = ({ cog }) => (
  <div className='cog'>
    <h3 className='cog__title'>
      <span>{cog.icon} </span>
      {cog.name}
    </h3>
    <ul>
      {cog.commands.map((command) => (
        <li className='command'>
          <div className='command__row'>
            <code className='command__syntax'>
              &gt;{command.name}{' '}
              <span className='command__arguments'>{command.usage}</span>
            </code>
            <p className='command__description'>{command.description}</p>
          </div>

          <div className='subcommands'>
            {command.subcommands &&
              command.subcommands.map((subcommand) => (
                <Subcommand
                  command={subcommand}
                  parent={command.name}
                  key={uniqid()}
                />
              ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default Cog
