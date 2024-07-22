import { useEffect, useReducer } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import AuthLayout from "../layout";
import { Label } from "../../library/label";
import { Input } from "../../library/input";
import PasswordInput from "../../library/input/passwordInput";
import { Button } from "../../library/button";
import signupReducer, { SignupEnum } from "./reducer";
import PoolData from "../../UserPool";
import CofirmationCode from "../Confirmation";

const SignupPage = () => {
  const [signupDetails, dispatch] = useReducer(signupReducer, {
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
      type: SignupEnum.LOADING,
      payload: false,
    });
    const timer = setTimeout(() => {
      dispatch({
        type: SignupEnum.ERROR_MESSAGE,
        payload: "",
      });
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, [signupDetails.error]);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch({
      type: SignupEnum.LOADING,
      payload: true,
    });

    const email = signupDetails.email || "";
    const password = signupDetails.password || "";

    if (email.length === 0)
      return dispatch({
        type: SignupEnum.ERROR_MESSAGE,
        payload: "Please enter a email",
      });

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email))
      return dispatch({
        type: SignupEnum.ERROR_MESSAGE,
        payload: "Email is invalid.",
      });

    // Password validation criteria
    const isValidPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      password
    );

    if (isValidPassword) {
      const userPool = new CognitoUserPool(PoolData);

      userPool.signUp(
        signupDetails.email,
        signupDetails.password,
        [],
        [],
        (err, data) => {
          if (err) {
            dispatch({
              type: SignupEnum.ERROR_MESSAGE,
              payload: err.message,
            });
            return;
          }
          dispatch({
            type: SignupEnum.LOADING,
            payload: false,
          });
          dispatch({
            type: SignupEnum.TOGGLE_SHOW_CONFIRM_CODE,
            payload: true,
          });
          // Add your own code here to navigate to the home page or any other page
        }
      );
    } else {
      dispatch({
        type: SignupEnum.ERROR_MESSAGE,
        payload: "Password: 8+ characters, 1 uppercase, 1 symbol",
      });
    }
  };

  return (
    <AuthLayout>
      {signupDetails.showConfirmCode ? (
        <CofirmationCode defaultEmail={signupDetails.email} />
      ) : (
        <form className="relative">
          <h2 className="text-2xl font-bold mb-5">Sign Up & Dive In</h2>

          <Label className="text-gray-500">Email</Label>
          <Input
            placeholder="Enter email"
            onChange={(e) =>
              dispatch({
                type: SignupEnum.SET_EMAIL,
                payload: e.target.value,
              })
            }
            className="placeholder:text-gray-300"
          />
          <Label className="text-gray-500 mt-4 mb-1 block">Password</Label>
          <PasswordInput
            showPasssword={signupDetails.showPassword}
            onChange={(e) =>
              dispatch({
                type: SignupEnum.SET_PASSWORD,
                payload: e.target.value,
              })
            }
            eyeHandler={() =>
              dispatch({
                type: SignupEnum.TOGGLE_SHOW_PASSWORD,
                payload: !signupDetails.showPassword,
              })
            }
          />
          <Button
            onClick={submitHandler}
            className="mt-7 w-full"
            disabled={signupDetails.loading}
          >
            {signupDetails.loading ? "Loading..." : "Sign up"}
          </Button>
          {
            <p className="text-secondaryColor text-center text-sm mt-3 h-5">
              {!!signupDetails.error.length && signupDetails.error}
            </p>
          }
        </form>
      )}
    </AuthLayout>
  );
};

export default SignupPage;
