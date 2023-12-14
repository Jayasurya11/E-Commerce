import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kids_banner from "./components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/E-Commerce" element={<Shop />} />
          <Route
            path="/E-Commerce/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/E-Commerce/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/E-Commerce/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/E-Commerce/product/:productId" element={<Product />} />
          <Route path="/E-Commerce/cart" element={<Cart />} />
          <Route path="/E-Commerce/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
