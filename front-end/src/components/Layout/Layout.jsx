import { Footer } from "../Footer/Footer";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";

export function Layout() {
  return (
    <>
      <MainMenu />
      <Logo />
      <CurrencySelector />
      <Footer />
    </>
  );
}
