import "./App.css";
import HeaderPage from "./pages/HeaderPage";
import { Route, Switch, useLocation } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";
import Search from "./components/search/Search";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/Cart";
import FooterPage from "./pages/FooterPage";

import CartConfirmation from "./components/cart/CartConfirmation";
import { useSelector } from "react-redux";
import {AnimatePresence} from 'framer-motion';


function App() {
  const modalState = useSelector((state) => state.modal.showModal);
  const location = useLocation()

  return (
    <div className="App">
      <HeaderPage />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/" exact>
          <MainPage />
        </Route>

        <Route path="/food" exact>
          <MenuPage />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/cart" exact>
          <Cart />
          {modalState && <CartConfirmation />}
        </Route>
      </Switch>
      </AnimatePresence>
      <FooterPage />
    </div>
  );
}

export default App;
