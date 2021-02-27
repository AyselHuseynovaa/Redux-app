import React from "react";
import Home from "./Components/Home";
import Post from "./Components/Post";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div >
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/:post_id" component={Post}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
