import "./App.css"
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router";
import Products from "./screens/Products"


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
        </Route>

        <Route exact path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
