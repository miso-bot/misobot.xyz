import { ThreeDots } from 'react-loader-spinner'
import './Loading.css'

const Loading = ({ theme }) => (
  <ThreeDots
    height='80'
    width='80'
    radius='9'
    wrapperClass='loading'
    color={theme === 'dark' ? '#b790d9' : '#e25f8a'}
  />
)
export default Loading
