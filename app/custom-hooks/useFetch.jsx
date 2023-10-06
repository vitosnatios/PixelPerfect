'use client';
import { useState } from 'react';

const useFetch = () => {
  const [state, setState] = useState({
    error: null,
    loading: false,
    data: null,
  });

  const request = async (url, options) => {
    try {
      setState({ data: null, error: null, loading: true });
      const res = await fetch(url, options);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setState((prev) => ({ ...prev, loading: false, data: json }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error:
          error instanceof Error ? error.message : 'Oops, algo deu errado.',
      }));
    }
  };

  return { ...state, request };
};

export default useFetch;
