import { useEffect } from "react";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import PoolData from "../../UserPool";

const userPool = new CognitoUserPool(PoolData);

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const Username = Cookies.get("email") || "";
    const user = new CognitoUser({
      Username,
      Pool: userPool,
    });

    Cookies.remove("x-a-t");
    Cookies.remove("x-a-i");
    Cookies.remove("x-a-r");
    Cookies.remove("email");
    localStorage.clear();

    try {
      user.signOut(() => {
        navigate("/auth/login");
      });
    } catch (err) {}
  }, []);

  return <>Logout...</>;
};

export default Logout;
