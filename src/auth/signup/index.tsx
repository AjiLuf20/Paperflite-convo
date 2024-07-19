import { useState } from "react";
import AuthLayout from "../layout";
import { Label } from "../../library/label";
import { Input } from "../../library/input";
import PasswordInput from "../../library/input/passwordInput";
import { Button } from "../../library/button";

const SignupPage = () => {
  const [passwordDetails, setPasswordDetails] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  const submitHandler = () => {};

  return (
    <AuthLayout>
      <form className="z-50 relative bg-background transition-all duration-500">
        <h2 className="text-2xl font-bold mb-5">Sign Up & Dive In</h2>

        <Label className="text-gray-500">Email</Label>
        <Input
          placeholder="Enter email"
          className="placeholder:text-gray-300"
        />
        <Label className="text-gray-500 mt-4 mb-1 block">Password</Label>
        <PasswordInput
          showPasssword={passwordDetails.showPassword}
          eyeHandler={() =>
            setPasswordDetails((p) => ({
              ...passwordDetails,
              showPassword: !p.showPassword,
            }))
          }
        />
        <Label className="text-gray-500 mt-4 mb-1 block">
          Confirm Password
        </Label>
        <PasswordInput
          showPasssword={passwordDetails.showConfirmPassword}
          eyeHandler={() =>
            setPasswordDetails((p) => ({
              ...passwordDetails,
              showConfirmPassword: !p.showConfirmPassword,
            }))
          }
          placeholder="Enter confirm password"
        />
        <Button onClick={submitHandler} className="mt-7 w-full">
          Sign up
        </Button>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
