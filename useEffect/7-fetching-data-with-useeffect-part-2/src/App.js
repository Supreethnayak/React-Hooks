// search post based on post id
import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(0);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="App">
      <input type="number" vlaue={id} onChange={(e) => setId(e.target.value)} />
      <p>{post.title}</p>
    </div>
  );
}
