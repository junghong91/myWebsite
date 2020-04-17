import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Comments from "./components/comments/Comments";

function App() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("/comments")
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/comments" render={() => <Comments comments={comments} />} />
    </>
  );
}

export default App;
