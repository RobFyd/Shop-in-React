import { Footer } from "../Footer/Footer";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { IconMenu } from "../IconMenu/IconMenu";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
  return (
    <>
      <TopBar>
        <MainMenu />
        <Logo />
        <CurrencySelector />
        <IconMenu />
      </TopBar>
      <Footer />
    </>
  );
}
