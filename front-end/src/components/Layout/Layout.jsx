import { Footer } from "../Footer/Footer";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { IconMenu } from "../IconMenu/IconMenu";
import { TopBar } from "../TopBar/TopBar";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { MainContent } from "../MainContent/MainContent";

export function Layout() {
  return (
    <>
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
      </MainContent>
      <Footer />
    </>
  );
}
