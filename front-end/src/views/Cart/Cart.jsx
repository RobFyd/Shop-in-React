import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Layout } from "../../components/Layout/Layout";

export function Cart() {
  const cartProducts = [
    {
      id: 2,
      gender: "men",
      category: "clothes",
      subcategory: "t-shirts",
      productName: "T-Shirt",
      brand: "Top Brand",
      priceGBP: 19.99,
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        "http://localhost:3000/product-photos/wt1 (2).png",
        "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
      id: 3,
      gender: "men",
      category: "clothes",
      subcategory: "t-shirts",
      productName: "T-shirt",
      // productName: "T-shirt 2",
      brand: "Sun Tzu",
      priceGBP: 19.99,
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        "http://localhost:3000/product-photos/wt1 (3).png",
        "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
  ];
  return (
    <Layout>
      <FlexContainer>
        <CartProductsList products={cartProducts} />
        <CartSummary products={cartProducts} />
      </FlexContainer>
    </Layout>
  );
}
