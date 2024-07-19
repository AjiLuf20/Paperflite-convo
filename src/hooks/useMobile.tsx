import { useState, useEffect } from "react";

// Define the type for the hook's return value
type UseIsMobileReturnType = boolean;

// Custom hook to check if the current device is mobile based on window width
const useIsMobile = (): UseIsMobileReturnType => {
  // Define the mobile breakpoint
  const mobileBreakpoint = 768;

  // State to store whether the device is mobile or not
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < mobileBreakpoint
  );

  // Function to handle window resize event
  const handleResize = () => {
    setIsMobile(window.innerWidth < mobileBreakpoint);
  };

  // Effect to add and clean up the resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
