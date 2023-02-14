import { useState, useEffect } from "react";

const useFetch = (url) => {

  //array destructuring - review on JS documentation
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //Note dependency array at the end of this useEffect, '[]'. This empty array keeps useEffect from firing every time the state changes
  //thus keeping your code and computer from the danger of an infinite loop. It renders the data once as needed.
  //update: dependency array is no longer empty, contains url. This means that anytime the url changes, this custom hook (useFetch) will run.
  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          console.log(res);
          if (!res.ok) {
            throw Error('Could not fetch data for that resource.');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted')
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        })
    }, 1000);

    return () => abortCont.abort();
  }, [url]);



  // these are the properties we want from this hook
  return { data, isLoading, error }
}

export default useFetch;