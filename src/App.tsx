import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PageContent from "./components/PageContent/PageContent";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./GlobalStyle";
import SideBar from "./components/SideBar/SideBar";
import SideBarContext from "./context/SideBarContext";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
          <Nav />
          {isSideBarOpen && <SideBar />}
        </SideBarContext.Provider>
        <PageContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<div>shopping cart</div>} />
            <Route path="/wishlist" element={<div>wishlist</div>} />
            <Route path="/category" element={<div>category page</div>} />
            <Route path="/product" element={<div>product page</div>} />
            <Route path="/*" element={<div>404 page</div>} />
          </Routes>
        </PageContent>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;