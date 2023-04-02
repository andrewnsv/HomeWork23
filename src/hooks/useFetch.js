import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

axios.interceptors.request.use((config) => {
  config.headers["My-custom-field"] = "foobar";
  return config;
});

const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response)
        setdata(response.data);
        setloading(false);
        setError(response.message);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
