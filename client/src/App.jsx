import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductIndexScreen from "./admin/product/ProductIndexScreen";
import HomeScreen from "./front/home/HomeScreen";
import LoginScreen from "./front/home/LoginScreen";
import CartScreen from "./front/home/CartScreen";
import CheckoutScreen from "./front/home/CheckoutScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/checkout' element={<CheckoutScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/admin/products' element={<ProductIndexScreen />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
