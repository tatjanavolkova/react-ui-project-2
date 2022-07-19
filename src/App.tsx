import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<div>home page</div>} />
          <Route path="/cart" element={<div>shopping cart</div>} />
          <Route path="/wishlist" element={<div>wishlist</div>} />
          <Route path="/category" element={<div>category page</div>} />
          <Route path="/product" element={<div>product page</div>} />
          <Route path="/*" element={<div>404 page</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;