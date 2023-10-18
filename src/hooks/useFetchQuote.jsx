import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useFetchQuote() {
    const [useQuote, setUseQuote] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      async function fetchQuote() {
        try {
          const response = await axios.get("https://api.kanye.rest");
          setUseQuote(response.data);
         setIsLoading(false)
        } catch (error) {
          console.log(error);
        }
      }
      const fetchQuoteTimeout = () => {
        fetchQuote();

        const timeoutId = setTimeout(() => {
          fetchQuote();
        }, 10000);

        return () => clearTimeout(timeoutId);
      };

      fetchQuoteTimeout();
    }, []);
  return ([useQuote, isLoading]
  )
}
