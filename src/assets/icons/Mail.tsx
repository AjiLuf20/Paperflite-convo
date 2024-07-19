import { twMerge } from "tailwind-merge";

const MailSvg = ({
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
      <g clipPath="url(#clip0_1_2653)">
        <path
          d="M6.99999 9.45C6.72874 9.45 6.46624 9.38875 6.22124 9.26625L0.682493 6.4925C0.463743 6.3875 0.376243 6.125 0.489993 5.90625C0.594993 5.6875 0.857493 5.6 1.07624 5.71375L6.61499 8.4875C6.85999 8.61 7.14874 8.61 7.39374 8.4875L12.9325 5.71375C13.1512 5.60875 13.4137 5.69625 13.5187 5.90625C13.6237 6.125 13.5362 6.3875 13.3262 6.4925L7.78749 9.26625C7.54249 9.38875 7.27124 9.45 7.00874 9.45H6.99999Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
        <path
          d="M12.25 13.9738H1.75C0.7875 13.9738 0 13.1863 0 12.2238V6.1775C0 6.01125 0.07 5.845 0.1925 5.73125L5.81 0.490001C6.48375 -0.131249 7.53375 -0.131249 8.19875 0.490001L13.8075 5.73125C13.93 5.845 14 6.01125 14 6.1775V12.2238C14 13.1863 13.2125 13.9738 12.25 13.9738ZM0.875 6.29125V12.2238C0.875 12.705 1.26875 13.0988 1.75 13.0988H12.25C12.7312 13.0988 13.125 12.705 13.125 12.2238V6.29125L7.595 1.12875C7.2625 0.813751 6.7375 0.813751 6.405 1.12875L0.875 6.29125Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2653">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MailSvg;