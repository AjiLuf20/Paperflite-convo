import { twMerge } from "tailwind-merge";

const Nav1Svg = ({
  fill,
  className,
}: {
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("group cursor-pointer", className)}
    >
      <g clipPath="url(#clip0_1_2770)">
        <path
          d="M15.1 17.1H4.97498C4.77498 17.1 4.59998 16.9375 4.59998 16.725V2.875C4.59998 2.675 4.76248 2.5 4.97498 2.5H15.1C15.3 2.5 15.475 2.6625 15.475 2.875V16.7375C15.475 16.9375 15.3125 17.1125 15.1 17.1125V17.1ZM5.34998 16.3625H14.7375V3.25H5.34998V16.3625Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
        <path
          d="M2.57501 16.375C2.37501 16.375 2.20001 16.2125 2.20001 16V3.60001C2.20001 3.40001 2.36251 3.22501 2.57501 3.22501C2.78751 3.22501 2.95001 3.38751 2.95001 3.60001V16C2.95001 16.2 2.78751 16.375 2.57501 16.375Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
        <path
          d="M0.375 14.9C0.175 14.9 0 14.7375 0 14.525V5.07501C0 4.87501 0.1625 4.70001 0.375 4.70001C0.5875 4.70001 0.75 4.86251 0.75 5.07501V14.525C0.75 14.725 0.5875 14.9 0.375 14.9Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
        <path
          d="M17.425 16.375C17.225 16.375 17.05 16.2125 17.05 16V3.60001C17.05 3.40001 17.2125 3.22501 17.425 3.22501C17.6375 3.22501 17.8 3.38751 17.8 3.60001V16C17.8 16.2 17.6375 16.375 17.425 16.375Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
        <path
          d="M19.625 14.9C19.425 14.9 19.25 14.7375 19.25 14.525V5.07501C19.25 4.87501 19.4125 4.70001 19.625 4.70001C19.8375 4.70001 20 4.86251 20 5.07501V14.525C20 14.725 19.8375 14.9 19.625 14.9Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2770">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Nav1Svg;
