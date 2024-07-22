import { useEffect, useState } from "react";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import PoolData from "../UserPool";
import { Label } from "../library/label";
import { Input } from "../library/input";
import { Button } from "../library/button";

const userPool = new CognitoUserPool(PoolData);

const ConfirmationCode = ({
  defaultEmail,
  defaultError,
}: {
  defaultEmail: string;
  defaultError?: string;
}) => {
  const navigate = useNavigate();

  const [confirmationDetails, setConfirmationDetails] = useState({
    email: defaultEmail || "",
    code: "",
    error: defaultError || "",
    loading: false,
  });

  // Clear the error message
  useEffect(() => {
    setConfirmationDetails({
      ...confirmationDetails,
      loading: false,
    });
    const timer = setTimeout(() => {
      setConfirmationDetails({
        ...confirmationDetails,
        error: "",
      });
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, [confirmationDetails.error]);

  const userData = {
    Username: defaultEmail || "",
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  const confirmationHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setConfirmationDetails({
      ...confirmationDetails,
      loading: true,
    });
    if (confirmationDetails.code === "" || confirmationDetails.email === "") {
      setConfirmationDetails({
        ...confirmationDetails,
        error: "Fields are required",
      });
      return;
    }

    cognitoUser.confirmRegistration(
      confirmationDetails.code,
      true,
      function (err, result) {
        if (err) {
          setConfirmationDetails({
            ...confirmationDetails,
            error: err.message || JSON.stringify(err),
          });
          return;
        }
        setConfirmationDetails({
          ...confirmationDetails,
          loading: false,
        });
        navigate("/");
      }
    );
  };

  return (
    <form className="z-50 relative bg-background transition-all duration-500">
      <h2 className="text-2xl font-bold mb-5">Confirmation code</h2>

      <Label className="text-gray-500">Email</Label>
      <Input
        value={confirmationDetails.email}
        placeholder="Enter email"
        onChange={(e) =>
          setConfirmationDetails({
            ...confirmationDetails,
            email: e.target.value,
          })
        }
        className="placeholder:text-gray-300"
      />
      <Label className="text-gray-500 mt-4 mb-1 block">Confirmation code</Label>
      <Input
        value={confirmationDetails.code}
        placeholder="Enter code"
        onChange={(e) =>
          setConfirmationDetails({
            ...confirmationDetails,
            code: e.target.value,
          })
        }
        className="placeholder:text-gray-300"
      />
      <Button
        onClick={confirmationHandler}
        className="mt-7 w-full"
        disabled={confirmationDetails.loading}
      >
        {confirmationDetails.loading ? "Loading..." : "Confirm"}
      </Button>
      {
        <p className="text-secondaryColor text-center text-sm mt-3 h-5">
          {!!confirmationDetails.error.length && confirmationDetails.error}
        </p>
      }
    </form>
  );
};

export default ConfirmationCode;
