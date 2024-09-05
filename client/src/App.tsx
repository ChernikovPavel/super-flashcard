import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import AuthPage from "./pages/AuthPage/AuthPage";
import GamePage from "./pages/GamePage/GamePage";
import AccountPage from "./pages/AccountPage/AccountPage";
import ProtectedRoute from "../ProtectedRoute";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getUser } from "./redux/thunkActions";

import "@radix-ui/themes/styles.css";

function App() {
  const { user } = useAppSelector((state) => state.userSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute authUser={user.username} redirectTo={"/"}>
              <AuthPage />
            </ProtectedRoute>
          ),
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
