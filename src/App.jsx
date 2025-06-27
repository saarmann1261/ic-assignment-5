import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./page/Cart";
import Home from "./page/Home";

function App() {
  return (
    <div className="px-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
