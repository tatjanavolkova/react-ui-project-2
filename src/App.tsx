import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PageContent from "./components/PageContent/PageContent";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./GlobalStyle";
import SideBar from "./components/SideBar/SideBar";
import SideBarContext from "./context/SideBarContext";
import Home from "./pages/home/Home";
import ProductPage from "./pages/productPage/ProductPage";
import Cart from "./pages/cart/Cart";
import CartContext from "./context/CartContext";
import Category from "./pages/category/Category";

const App: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [cartValue, setCartValue] = useState([]);

  return (
    <>
      <GlobalStyle />
      <CartContext.Provider value={{ cartValue, setCartValue }}>
        <BrowserRouter>
          <SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
            <Nav />
            {isSideBarOpen && <SideBar />}
          </SideBarContext.Provider>
          <PageContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<div>wishlist</div>} />
              <Route path="category/:categoryName" element={<Category />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/*" element={<div>404 page</div>} />
            </Routes>
          </PageContent>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
};

export default App;