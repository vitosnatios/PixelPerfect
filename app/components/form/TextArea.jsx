import React from 'react';

const TextArea = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label} </label>
      <textarea {...props} ref={props.refe}></textarea>
    </>
  );
};

export default TextArea;
