import styles from './TextArea.module.css';

const TextArea = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label} </label>
      <textarea
        className={styles.textarea}
        {...props}
        ref={props.refe}
      ></textarea>
    </>
  );
};

export default TextArea;
