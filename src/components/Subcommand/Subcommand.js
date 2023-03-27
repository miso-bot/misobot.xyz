import uniqid from 'uniqid'
import './Subcommand.css'

const Subcommand = ({ command, parent }) => (
  <li className='subcommand'>
    <div className='command__row'>
      <code className='command__syntax'>
        &gt;{parent} {command.name}{' '}
        <span className='command__arguments'>{command.usage}</span>
      </code>
      <p className='command__description'>{command.description}</p>
    </div>
    {command.subcommands && (
      <ul>
        {command.subcommands.map((subcommand) => (
          <Subcommand
            command={subcommand}
            parent={`${parent} ${command.name}`}
            key={uniqid()}
          />
        ))}
      </ul>
    )}
  </li>
)

export default Subcommand
