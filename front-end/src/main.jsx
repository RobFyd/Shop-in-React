import "./styles/theme.css";
import "./styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { Cart } from "./views/Cart/Cart.jsx";
import { Favourites } from "./views/Favourites/Favourites.jsx";
import { ProductsList } from "./views/ProductsList/ProductsList.jsx";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { mainPageLoader } from "./api/mainPageLoader.js";
import { productListLoader } from "./api/productListLoader.js";
import { productLoader } from "./api/productLoader.js";
import { addProductToFavourites } from "./api/addProductToFavouritesAction.js";
import { favouritesLoader } from "./api/favouritesLoader.js";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction.js";

const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductToFavourites,
  },
  {
    path: "/delete-from-favourites/:favouriteId",
    action: deleteFavouriteAction,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
        loader: favouritesLoader,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductsList />,
        loader: productListLoader,
      },
      {
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
  {
    path: "test",
    element: <Layout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
