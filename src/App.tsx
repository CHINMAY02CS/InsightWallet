import PublicLayout from "./layouts/PublicLayout";
import Login from "./pages/auth/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([PublicRoute()]);

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
    ],
  };
};
