import { Footer } from "../Footer/Footer";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { IconMenu } from "../IconMenu/IconMenu";

export function Layout() {
  return (
    <>
      <MainMenu />
      <Logo />
      <CurrencySelector />
      <IconMenu />
      <Footer />
    </>
  );
}
