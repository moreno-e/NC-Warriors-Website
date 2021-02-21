import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/players")
      .then((res) => {
        console.log(res);
        setPosts(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return <div>
      <ul>
          adfasf
        
      </ul>

  </div>;
}

export default DataFetching;
