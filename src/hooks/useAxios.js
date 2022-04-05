import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://icanhazdadjoke.com/";

axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = () => {
    axios
      .get(URL)
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return { response, error, loading };
};

export default useAxios;
