import { useEffect, useReducer } from "react";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Button } from "../../library/button";
import { Input } from "../../library/input";
import PasswordInput from "../../library/input/passwordInput";
import { Label } from "../../library/label";
import AuthLayout from "../layout";
import loginReducer, { LoginEnum } from "./reducer";
import ConfirmationCode from "../Confirmation";
import PoolData from "../../UserPool";

const userPool = new CognitoUserPool(PoolData);

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginDetails, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
    error: "",
    showPassword: false,
    showConfirmCode: false,
    loading: false,
  });

  // Clear the error message
  useEffect(() => {
    dispatch({
      type: LoginEnum.LOADING,
      payload: false,
    });
    const timer = setTimeout(() => {
      dispatch({
        type: LoginEnum.ERROR_MESSAGE,
        payload: "",
      });
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, [loginDetails.error]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch({
      type: LoginEnum.LOADING,
      payload: true,
    });

    const email = loginDetails.email || "";
    const password = loginDetails.password || "";

    if (email.length === 0)
      return dispatch({
        type: LoginEnum.ERROR_MESSAGE,
        payload: "Please enter a email",
      });

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email))
      return dispatch({
        type: LoginEnum.ERROR_MESSAGE,
        payload: "Email is invalid.",
      });

    // Password validation criteria
    const isValidPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      password
    );

    if (isValidPassword) {
      dispatch({
        type: LoginEnum.ERROR_MESSAGE,
        payload: "",
      });

      const user = new CognitoUser({
        Username: email,
        Pool: userPool,
      });

      const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          const { accessToken, idToken, refreshToken } = data as any;
          Cookies.set("x-a-t", accessToken.jwtToken);
          Cookies.set("x-a-i", idToken.jwtToken);
          Cookies.set("x-a-r", refreshToken.token);
          Cookies.set("email", email);
          dispatch({
            type: LoginEnum.LOADING,
            payload: false,
          });
          navigate("/");
        },
        onFailure: (err) => {
          if (err.code === "UserNotConfirmedException") {
            dispatch({
              type: LoginEnum.TOGGLE_SHOW_CONFIRM_CODE,
              payload: true,
            });
            user.resendConfirmationCode(() => {
              if (err) {
                dispatch({
                  type: LoginEnum.ERROR_MESSAGE,
                  payload: err.message || JSON.stringify(err),
                });
                return;
              }
            });
            return;
          }
          dispatch({
            type: LoginEnum.ERROR_MESSAGE,
            payload: err.message,
          });
          console.error({ err });
        },
      });
      // Redirect or do other actions after successful login
    } else {
      dispatch({
        type: LoginEnum.ERROR_MESSAGE,
        payload: "Password: 8+ characters, 1 uppercase, 1 symbol",
      });
    }
  };

  return (
    <AuthLayout>
      {loginDetails.showConfirmCode ? (
        <ConfirmationCode defaultEmail={loginDetails.email} />
      ) : (
        <form onSubmit={submitHandler} className={"w-full h-full"}>
          <h2 className="text-2xl font-bold mb-5">Welcome back</h2>

          <Label className="text-gray-500">Email</Label>
          <Input
            value={loginDetails.email}
            onChange={(e) =>
              dispatch({
                type: LoginEnum.SET_EMAIL,
                payload: e.target.value,
              })
            }
            placeholder="Enter email"
            className="placeholder:text-gray-300"
          />
          <Label className="text-gray-500 mt-4 mb-1 block">Password</Label>
          <PasswordInput
            showPasssword={loginDetails.showPassword}
            onChange={(e) =>
              dispatch({
                type: LoginEnum.SET_PASSWORD,
                payload: e.target.value,
              })
            }
            eyeHandler={() =>
              dispatch({
                type: LoginEnum.TOGGLE_SHOW_PASSWORD,
                payload: !loginDetails.showPassword,
              })
            }
            placeholder="Enter confirm password"
          />

          <Button
            type="submit"
            className="mt-7 w-full"
            disabled={loginDetails.loading}
          >
            {loginDetails.loading ? "Loading..." : "Login"}
          </Button>
          {
            <p className="text-secondaryColor text-center text-sm mt-3 h-5">
              {!!loginDetails.error.length && loginDetails.error}
            </p>
          }
        </form>
      )}
    </AuthLayout>
  );
};

export default LoginPage;
