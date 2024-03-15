import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./pages/ErrorPage";
import ThemeContextProvider from "./context/ThemeContext";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
