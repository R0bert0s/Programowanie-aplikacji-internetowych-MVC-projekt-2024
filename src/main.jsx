import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  AuthorsPage,
  EpochsPage,
  AudiobooksPage,
  GenresPage,
} from "./pages";
import Navigation from "./components/Navigation"; // Ensure this path is correct

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/authors",
        element: <AuthorsPage />,
      },
      {
        path: "/epochs",
        element: <EpochsPage />,
      },
      {
        path: "/audiobooks",
        element: <AudiobooksPage />,
      },
      {
        path: "/genres",
        element: <GenresPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
