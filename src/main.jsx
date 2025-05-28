import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Forgot from "./Forgot.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import RecoverPassword from "./RecoverPassword.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Login,
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.showId}.json`, {
        //     signal: request.signal,
        //   }),
      },
      {
        path: "forgot",
        Component: Forgot,
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.showId}.json`, {
        //     signal: request.signal,
        //   }),
      },
      {
        path: "recoverPassword",
        Component: RecoverPassword,
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.showId}.json`, {
        //     signal: request.signal,
        //   }),
      },
      {
        path: "register",
        Component: Register,
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.showId}.json`, {
        //     signal: request.signal,
        //   }),
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "*",
        Component: Login,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
