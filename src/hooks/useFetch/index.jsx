import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      await fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((response) => response.json())
        .then((result) => setData(result));
    } catch (e) {
      setError(e.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, [url]);

  return { data, error, loading };
};
