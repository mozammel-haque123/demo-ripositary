import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Mainleyaout from "../component/Mainleyaout/Mainleyaout";
import Navbar1 from "../component/navbar1/Navbar1";
import ProdactData1 from "../component/ProdactData1/ProdactData1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainleyaout />,
    children: [
      {
        path: "/",
        element: <Navbar1 />,
        loader: () => fetch("/navbarbutton1.json").then(res => res.json()),
        children: [
          {
            index: true,
            element: <Navigate to="data/projector" replace />
          },
          {
            path: "data/:id",
            element: <ProdactData1 />,
            loader: async ({ params }) => {
              const res = await fetch("/navbar1.json");
              const allData = await res.json();
              return allData[params.id] || [];
            },
          },
        ],
      },
    ],
  },
]);

export default router;
