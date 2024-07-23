import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Crop from"./pages/crop";
import Farmers from "./pages/crop";
import "./index.css";
import App from "../App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Oop! Error!</h1>,
    children: [
      {
        path: "/crop",
        element: <crop />
      },
      {
        path: "/crop-type",
        element: <crop-type />
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);