'use client';
import { useRef } from 'react';

const useInput = (name, placeholder, type = 'text') => {
  const refe = useRef();
  return {
    id: name,
    type,
    placeholder,
    refe,
    name,
    required: true,
  };
};

export default useInput;
