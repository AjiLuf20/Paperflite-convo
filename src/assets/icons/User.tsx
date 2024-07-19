import { twMerge } from "tailwind-merge";

const UserSvg = ({
  fill,
  className,
}: {
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("group cursor-pointer", className)}
    >
      <g clipPath="url(#clip0_1_2660)">
        <path
          d="M11.5938 14H2.40625C1.56625 14 0.875 13.3088 0.875 12.4688C0.875 9.21375 3.52625 6.5625 6.78125 6.5625H7.21875C10.4738 6.5625 13.125 9.21375 13.125 12.4688C13.125 13.3088 12.4338 14 11.5938 14ZM6.78125 7.4375C4.0075 7.4375 1.75 9.695 1.75 12.4688C1.75 12.8275 2.0475 13.125 2.40625 13.125H11.5938C11.9525 13.125 12.25 12.8275 12.25 12.4688C12.25 9.695 9.9925 7.4375 7.21875 7.4375H6.78125Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
        <path
          d="M7 6.125C5.31125 6.125 3.9375 4.75125 3.9375 3.0625C3.9375 1.37375 5.31125 0 7 0C8.68875 0 10.0625 1.37375 10.0625 3.0625C10.0625 4.75125 8.68875 6.125 7 6.125ZM7 0.875C5.7925 0.875 4.8125 1.855 4.8125 3.0625C4.8125 4.27 5.7925 5.25 7 5.25C8.2075 5.25 9.1875 4.27 9.1875 3.0625C9.1875 1.855 8.2075 0.875 7 0.875Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2660">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserSvg;
