import HandIcon from "../HandIcon/HandIcon"
import styles from './ResutCard.module.css';


function ResultCard ({ name, hand, score, result }) {
  const classNames = [
    styles.resultCard,
    result === '승리' ? styles.winner : '',
    result === '패배' ? styles.loser : '',
  ].join(' ');
  
  console.log(`${name} : ${result}`)
  return(
  <div className={classNames}>
    <div className={styles.chip}>승리</div>
    <div className={styles.name}>
      {name}
      </div> 
      <HandIcon value={hand}/> 점수: 
      <div className={styles.score}>{score}</div>
  </div> 
  )
}

export default ResultCard