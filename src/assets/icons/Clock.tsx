const ClockSvg = ({ fill }: { fill?: string }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group cursor-pointer"
    >
      <g clipPath="url(#clip0_1_2667)">
        <path
          d="M9.625 9.625C9.5375 9.625 9.45875 9.59875 9.38 9.555L6.83375 7.8575C6.65875 7.74375 6.5625 7.55125 6.5625 7.35V2.625C6.5625 2.38 6.755 2.1875 7 2.1875C7.245 2.1875 7.4375 2.38 7.4375 2.625V7.20125L9.87 8.82C10.0712 8.95125 10.1237 9.2225 9.9925 9.42375C9.905 9.54625 9.77375 9.61625 9.625 9.61625V9.625Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
        <path
          d="M7 14C3.14125 14 0 10.8587 0 7C0 3.14125 3.14125 0 7 0C10.8587 0 14 3.14125 14 7C14 10.8587 10.8587 14 7 14ZM7 0.875C3.6225 0.875 0.875 3.6225 0.875 7C0.875 10.3775 3.6225 13.125 7 13.125C10.3775 13.125 13.125 10.3775 13.125 7C13.125 3.6225 10.3775 0.875 7 0.875Z"
          fill={fill || "#717274"}
          className="group-hover:fill-secondaryColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2667">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ClockSvg;
