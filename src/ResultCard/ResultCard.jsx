import HandIcon from "../HandIcon/HandIcon"
import styles from './ResutCard.module.css';
import { clsx } from "clsx";

function ResultCard ({ name, hand, score, result }) {
  // const classNames = [
  //   styles.resultCard,
  //   result === '승리' ? styles.winner : '',
  //   result === '패배' ? styles.loser : '',
  // ].join(' ');

//   const classNames = clsx(
//   styles.resultCard,
//   result === '승리' && styles.winner,
//   result === '패배' && styles.loser
// );


  const classNames = clsx(
    styles.resultCard,
    {
     [styles.winner]: result === '승리',
     [styles.loser]: result === '패배'
    }
  )

  return(
  <div className={classNames}>
    <div className={styles.chip}>승리</div>
    <div className={styles.name}>
      {name}
    </div> 
      <HandIcon value={hand}/>  
      <div className={styles.score}>{score}</div>
  </div> 
  )
}

export default ResultCard