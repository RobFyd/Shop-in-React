import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";

export function Cart() {
  return (
    <FlexContainer>
      <CartProductsList products={cartProducts} />
      <CartSummary products={cartProducts} />
    </FlexContainer>
  );
}
