import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import App from "./Home.tsx";
import About from "./pages/About.tsx";
import Rekrutacja from "./pages/Rekrutacja.tsx";
import Wsparcia from "./pages/Wsparcia.tsx";
import Wytwory from "./pages/Wytwory.tsx";
import RootLayout from "./components/RootLayout.tsx";
import LayoutPracownie from "./components/PracownieLayout.tsx";
import Pracownie from "./pages/Pracownie.tsx";
import Gospodarstwa from "./pages/pracownie/gospodarstwa.tsx";
import Komputerowa from "./pages/pracownie/komputerowa.tsx";
import Krawiecka from "./pages/pracownie/krawiecka.tsx";
import Plastyczna from "./pages/pracownie/plastyczna.tsx";
import Psycholog from "./pages/pracownie/psycholog.tsx";
import Rewalidacja from "./pages/pracownie/rewalidacja.tsx";
import Rzemiosł from "./pages/pracownie/rzemiosl.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/wsparcia",
        element: <Wsparcia />,
      },
      {
        path: "/wytwory",
        element: <Wytwory />,
      },
      {
        path: "/pracownie",
        element: <LayoutPracownie />,
        children: [
          {
            index: true,
            element: <Pracownie />,
          },
          {
            path: "/pracownie/gospodarstwa",
            element: <Gospodarstwa />,
          },
          {
            path: "/pracownie/komputerowa",
            element: <Komputerowa />,
          },
          {
            path: "/pracownie/krawiecka",
            element: <Krawiecka />,
          },
          {
            path: "/pracownie/plastyczna",
            element: <Plastyczna />,
          },
          {
            path: "/pracownie/psycholog",
            element: <Psycholog />,
          },
          {
            path: "/pracownie/rewalidacja",
            element: <Rewalidacja />,
          },
          {
            path: "/pracownie/rzemiosl",
            element: <Rzemiosł />,
          },
        ],
      },
      {
        path: "rekrutacja",
        element: <Rekrutacja />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
