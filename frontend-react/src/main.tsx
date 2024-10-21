import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes//HomePage";
import { AuthProvider } from "./contexts/AuthContext";
import GamePage from "./routes/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  // {
  //   path: "/user",
  //   element: <UserPage />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  // </StrictMode>
);
