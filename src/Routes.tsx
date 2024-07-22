import { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import Dashboard from "./dashboard";
import LoginPage from "./auth/login";
import SignupPage from "./auth/signup";
import Logout from "./auth/logout";
import PoolData from "./UserPool";

function Routes() {
  const navigate = useNavigate();

  useEffect(() => {
    const userPool = new CognitoUserPool(PoolData);
    const user = userPool.getCurrentUser();

    if (user != null) {
      navigate("/");
    } else {
      navigate("/auth/login");
    }
  }, []);

  const element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    { path: "/logout", element: <Logout /> },
    { path: "auth/login", element: <LoginPage /> },
    { path: "auth/signup", element: <SignupPage /> },
    {
      path: ":id",
      element: <Dashboard />,
    },
  ]);

  return element;
}

export default Routes;
