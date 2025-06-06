import "./styles/theme.css";
import "./styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { Cart } from "./views/Cart/Cart.jsx";
import { Favorites } from "./views/Favorites/Favorites.jsx";
import { ProductsList } from "./views/ProductsList/ProductsList.jsx";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";
import { Layout } from "./components/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <MainPage />,
      // },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/:gender",
        element: <MainPage />,
        loader: ({ params }) => {
          const PATH_TO_ENDPOINT_MAPPING = {
            //  Map gender to API endpoint
            women: "women",
            men: "men",
            kids: "children",
          };

          const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
          if (backEndPath) {
            return fetch(`http://localhost:3000/${backEndPath}`);
          } else {
            return redirect("women");
          }
        },
      },
      // {
      //   path: "/products",
      //   element: <ProductsList />,
      // },
      // {
      //   path: "/products/:id",
      //   element: <ProductDetails />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
