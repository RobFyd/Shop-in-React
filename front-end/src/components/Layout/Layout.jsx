import { Footer } from "../Footer/Footer";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { IconMenu } from "../IconMenu/IconMenu";
import { TopBar } from "../TopBar/TopBar";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { MainContent } from "../MainContent/MainContent";
import { Outlet } from "react-router-dom";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES } from "../../constants/currencies";
import { CartContext } from "../../contexts/CartContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function Layout() {
  const [currency, setCurrency] = useLocalStorage(
    "selected_currency",
    CURRENCIES.PLN
  );

  const [cartItems, setCartItems] = useLocalStorage("cart_products", []);

  function addProductToCart(product) {
    const newState = [...cartItems, product];
    setCartItems(newState);
  }

  return (
    <>
      <CartContext.Provider value={[cartItems, addProductToCart]}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <MainContent>
            <TopBar>
              <MainMenu />
              <Logo />
              <div>
                <CurrencySelector />
                <IconMenu />
              </div>
            </TopBar>
            <CategoryMenu />
            <Outlet />
          </MainContent>
          <Footer />
        </CurrencyContext.Provider>
      </CartContext.Provider>
    </>
  );
}
