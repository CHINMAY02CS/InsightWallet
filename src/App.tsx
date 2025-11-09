import PublicLayout from "./layouts/PublicLayout";
import Login from "./pages/auth/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth/Signup";
import PrivateLayout from "./layouts/PrivateLayout";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const routes = createBrowserRouter([PublicRoute(), PrivateRoute()]);

  return <RouterProvider router={routes} />;
}

export default App;

const PublicRoute = () => {
  return {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  };
};

const PrivateRoute = () => {
  return {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  };
};
