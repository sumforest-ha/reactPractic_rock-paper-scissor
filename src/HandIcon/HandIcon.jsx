import rockImg from '../assets/rock.svg'
import paperImg from '../assets/paper.svg'
import scissorImg from '../assets/scissor.svg'

const HANDIMAGES = {
      rock : rockImg,
      scissor : scissorImg,
      paper : paperImg,
    }
    
function HandIcon({ value = 'rock', }) {
  return (
  <img src={HANDIMAGES[value]} art={value}/>
  )
}

export default HandIcon