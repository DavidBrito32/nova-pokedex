/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
export const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(url, {
        headers: { "content-type" : "application/json" },
      });
      setData(response.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else if (error.request) {
        setError("Sem resposta do servidor");
      } else {
        setError("Erro ao fazer a requisição");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, [url]);

  return { data, error, loading };
};
