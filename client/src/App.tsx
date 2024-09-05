import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import AuthPage from "./pages/AuthPage/AuthPage";
import GamePage from "./pages/GamePage/GamePage";
import AccountPage from "./pages/AccountPage/AccountPage";
// import ProtectedRoute from './ProtectedRoute';

import "@radix-ui/themes/styles.css";
// import { Flex, Text, Button } from "@radix-ui/themes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <AuthPage />,
        },
        {
          path: "/game",
          element: <GamePage />,
        },
        {
          path: "/account",
          element: <AccountPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
