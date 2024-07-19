import * as React from "react";

import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          "btn-grad mt-14 w-max px-6 py-2 md:px-8 md:py-2.5 rounded-md bg-secondaryColor text-base font-semibold text-bgColor cursor-pointer",
          className
        )}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
