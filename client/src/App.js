import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Comments from "./components/comments/Comments";
import EditArticle from "./components/comments/EditArticle";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

const App = () => {
  const [cookies, removeCookie] = useCookies(["user"]);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    if (cookies.user && cookies.user !== "undefined") {
      setHasCookie(true);
    }
  }, [cookies]);

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
      <Route path="/user/login" component={Login} />
      <Route path="/user/register" component={Register} />
    </>
  );
};

export default App;
