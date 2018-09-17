import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-dom-router";
const App = () => (
  <div>
    {/* <Nav />
    <Books /> */}
    <Router>
      <Nav />
      <Switch>
        <div>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </div>
      </Switch>
    </Router>
  </div>
);

export default App;
