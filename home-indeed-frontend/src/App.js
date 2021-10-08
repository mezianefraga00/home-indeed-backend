import "./App.css";
import Navbar from "./components/Navbar";
import Dashbord from "./components/ownerDashbord/Dashbord";
import Rent from "./components/Rent";
import Buy from "./components/Buy";
import AddHome from "./components/ownerDashbord/AddHome";
import DeleteHome from "./components/ownerDashbord/DeleteHome";
import UpdateHome from "./components/ownerDashbord/UpdateHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route exact path="/dashbord" component={Dashbord} />

      <Switch>
        <Route
          exact
          path="/rent"
          component={Rent}
          activeClassName="imagehome"
        />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/dashbord/addhome" component={AddHome} />
        <Route exact path="/dashbord/deletehome" component={DeleteHome} />
        <Route exact path="/dashbord/updatehome" component={UpdateHome} />
      </Switch>
    </Router>
  );
}

export default App;
