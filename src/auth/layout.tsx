import { Link, useLocation } from "react-router-dom";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLogin = location.pathname === "/auth/login" ? true : false;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full px-8 h-max sm:max-w-[360px] flex flex-col relative overflow-hidden bg-background">
        <div className={"text-left relative w-full h-full bg-background"}>
          {children}
        </div>
      </div>
      <p className="mt-8 text-grayColor text-sm">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link to={isLogin ? "/auth/signup" : "/auth/login"}>
          <span className="font-medium text-secondaryColor cursor-pointer">
            {isLogin ? "Signup" : "Login"}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default AuthLayout;
