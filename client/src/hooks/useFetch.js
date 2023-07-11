import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = axios.get(url);
        setData(res);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);
};
