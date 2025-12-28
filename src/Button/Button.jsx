import styles from './Button.module.css';


function Button ({ className = '',  children, onClick }) {
  const classNames = `${styles.button} ${className}`
  return (
  <button className={classNames} onClick={onClick}>
    {children}
  </button>
 )
}

export default Button

//외부에서 버튼의 위치를 조정하고 싶을 때 className =''을 props로 전달 여러번 쓰일때 유용