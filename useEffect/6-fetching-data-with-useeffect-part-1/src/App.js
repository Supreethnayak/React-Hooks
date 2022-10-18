import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <ul>
        {posts.map((eachPost) => (
          <li key={eachPost.id}>{eachPost.title}</li>
        ))}
      </ul>
    </div>
  );
}
