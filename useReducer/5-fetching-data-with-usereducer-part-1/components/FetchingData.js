// Problem: fetching data using axios and useState

// Limitation: muliple useState are used
// (can be minimised with useReducer)

import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchingData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState("false");
  useEffect(() => {
    // axios.get() returns a Promise
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setData(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setData({});
        setError("something went wrong..");
      });
  }, []);

  return (
    <>
      {loading ? "Loading..." : data.title}
      {error && error}
    </>
  );
}
