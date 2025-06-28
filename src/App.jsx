import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./page/Cart";
import Home from "./page/Home";
import SingleProduct from "./page/SingleProduct";

function App() {
  return (
    <div className="px-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />

      </Routes>
    </div>
  );
}

export default App;
