import { useEffect, useRef, useState } from "react";
import { Button } from "../../library/button";
import { Input } from "../../library/input";
import PasswordInput from "../../library/input/passwordInput";
import { Label } from "../../library/label";
import AuthLayout from "../layout";

const LoginPage = () => {
  const loginDetailsRefs = useRef({
    email: useRef<HTMLInputElement | null>(null),
    password: useRef<HTMLInputElement | null>(null),
  });

  const [error, setError] = useState("");

  const [showPasssword, setShowPassword] = useState(false);

  // Clear the error message
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const submitHandler = (e: any) => {
    e.preventDefault();

    const email = loginDetailsRefs.current.email.current?.value || "";
    const password = loginDetailsRefs.current.password.current?.value || "";

    if (email.length === 0) return setError("Please enter a email");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) return setError("Email is invalid.");

    // Password validation criteria
    const isValidPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      password
    );

    if (isValidPassword) {
      setError("");
      // Redirect or do other actions after successful login
    } else {
      setError("Password: 8+ characters, 1 uppercase, 1 symbol");
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={submitHandler} className={"w-full h-full"}>
        <h2 className="text-2xl font-bold mb-5">Welcome back</h2>

        <Label className="text-gray-500">Email</Label>
        <Input
          ref={loginDetailsRefs.current.email}
          placeholder="Enter email"
          className="placeholder:text-gray-300"
        />
        <Label className="text-gray-500 mt-4 mb-1 block">Password</Label>
        <PasswordInput
          ref={loginDetailsRefs.current.password}
          showPasssword={showPasssword}
          eyeHandler={() => setShowPassword((p) => !p)}
          placeholder="Enter confirm password"
        />

        <Button type="submit" className="mt-7 w-full">
          Login
        </Button>
        {
          <p className="text-secondaryColor text-center text-sm mt-3 h-5">
            {!!error.length && error}
          </p>
        }
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
