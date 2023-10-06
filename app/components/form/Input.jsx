const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label} </label>
      <input {...props} ref={props.refe} />
    </>
  );
};

export default Input;
