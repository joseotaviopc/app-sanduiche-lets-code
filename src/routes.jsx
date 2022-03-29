import { Component } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

class RootRouters extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default RootRouters;
