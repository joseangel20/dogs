import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";
import ErrorPage from "./pages/ErrorPage";
import { homeLoader } from "./datos.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      loader: homeLoader,
      errorElement: <ErrorPage />,
    },
    {
      path: "/acerca",
      element: <AcercaDe />,
    },
    {
      path: "/contacto",
      element: <Contacto />,
    },
  ],
  { basename: "/dogs" },
);

import "../src/styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
