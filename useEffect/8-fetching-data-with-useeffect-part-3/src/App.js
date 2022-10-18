// search post based on post id
// when a button is clicked
import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(0);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleCLick = () => {
    setIdFromButtonClick(id);
  };
  // now effect is dependent on idFromButtonClick, not id
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div className="App">
      <input type="number" vlaue={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleCLick}>Search</button>
      <p>{post.title}</p>
    </div>
  );
}
