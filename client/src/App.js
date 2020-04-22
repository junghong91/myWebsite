import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Comments from "./components/comments/Comments";
import EditArticle from "./components/comments/EditArticle";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
      <Route exact path="/comments" component={Comments} />
      <Route
        path="/comments/edit/:id"
        render={(props) => <EditArticle {...props} />}
      />
    </>
  );
}

export default App;
