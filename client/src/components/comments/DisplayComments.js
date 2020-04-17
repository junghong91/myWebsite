import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayComments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("/comments")
      .then((res) => setComments(res.data))
      .catch((err) => console.log(`Error: ${err}`));
  });

  return <div></div>;
};

export default DisplayComments;
