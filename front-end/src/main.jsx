import "./styles/theme.css";
import "./styles/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { Favorites } from "./views/Favorites/Favorites.jsx";
import { Cart } from "./views/Cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
