import "./App.css"
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router";
import Products from "./screens/Products"
import ProductDetail from "./screens/ProductDetail.jsx"
import ProductEdit from "./screens/ProductEdit.jsx"
import ProductCreate from "./screens/ProductCreate";

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
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/products/:id/edit">
          <ProductEdit />
        </Route>
        <Route path="/add-product">
          <ProductCreate  /> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;
