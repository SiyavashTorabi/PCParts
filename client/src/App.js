import "./App.css"
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router";
import Products from "./screens/Products"
import ProductDetail from "./screens/ProductDetail.jsx"
import ProductEdit from "./screens/ProductEdit.jsx"
import ProductCreate from "./screens/ProductCreate";
import Footer from "./components/Footer"
function App() {
  
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          <h1 className="text-4xl my-10 ...">welcome to PCParts. check the price on pc parts and other details.
            add pc parts and edit the existing ones from our archive </h1>
          <Footer />
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
