import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch the data for that resource');
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setIsLoading(false);
        setResponse(data);
        setError(null);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          throw Error('Fetch aborted');
        } else {
          setIsLoading(false);
          setError(error.message);
        }
      });
    return () => controller.abort();
  }, [url]);

  return { response, error, isLoading };
};
export default useFetch;
