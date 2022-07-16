import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>home page</div>} />
          <Route path="/cart" element={<div>shopping cart</div>} />
          <Route path="/wishlist" element={<div>wishlist</div>} />
          <Route path="/category" element={<div>category page</div>} />
          <Route path="/product" element={<div>product page</div>} />
          <Route path="/*" element={<div>404 page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;