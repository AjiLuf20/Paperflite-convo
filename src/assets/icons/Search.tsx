const SearchSvg = ({
  fill,
  className,
}: {
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_2458)">
        <path
          d="M11.625 12C11.5275 12 11.43 11.9625 11.3625 11.8875L7.9875 8.51249C7.8375 8.36249 7.8375 8.12999 7.9875 7.97999C8.1375 7.82999 8.37 7.82999 8.52 7.97999L11.895 11.355C12.045 11.505 12.045 11.7375 11.895 11.8875C11.82 11.9625 11.7225 12 11.6325 12H11.625Z"
          fill={fill || "#E51058"}
        />
        <path
          d="M4.875 9.75C2.19 9.75 0 7.56 0 4.875C0 2.19 2.19 0 4.875 0C7.56 0 9.75 2.19 9.75 4.875C9.75 7.56 7.56 9.75 4.875 9.75ZM4.875 0.75C2.6025 0.75 0.75 2.6025 0.75 4.875C0.75 7.1475 2.6025 9 4.875 9C7.1475 9 9 7.1475 9 4.875C9 2.6025 7.1475 0.75 4.875 0.75Z"
          fill={fill || "#E51058"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2458">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchSvg;