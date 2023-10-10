import styles from './Input.module.css';

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label} </label>
      <input className={styles.input} {...props} ref={props.refe} />
    </>
  );
};

export default Input;
