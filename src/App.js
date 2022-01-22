import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Forms from "./components/Form/Form";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/submit" component={Forms} exact />
      </Switch>
    </HashRouter>
  );
}

export default App;
