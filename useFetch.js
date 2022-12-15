import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    console.log(url);
    setState({
      ...state,
      isLoading: true,
    });

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
      console.log(data);
    } catch (err) {
      console.warm(err);
    }
  };

  useEffect(() => {
    return () => {
      getFetch();
    };
  }, [url]);

  return {
    ...state,
  };
};
