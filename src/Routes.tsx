import { useRoutes } from "react-router-dom";
import Dashboard from "./dashboard";
import LoginPage from "./auth/login";
import SignupPage from "./auth/signup";

function Routes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: ":id",
      element: <Dashboard />,
    },
    { path: "auth/login", element: <LoginPage /> },
    { path: "auth/signup", element: <SignupPage /> },
  ]);

  return element;
}

export default Routes;
