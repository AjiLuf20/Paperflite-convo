const FilterSvg = ({ fill }: { fill?: string }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group cursor-pointer"
    >
      <rect x="0.5" y="0.5" width="33" height="33" rx="9.5" stroke="#DBDBDB" />
      <path
        d="M23.5625 14.0862H10.4375C10.1925 14.0862 10 13.8937 10 13.6487C10 13.4037 10.1925 13.2112 10.4375 13.2112H23.5625C23.8075 13.2112 24 13.4037 24 13.6487C24 13.8937 23.8075 14.0862 23.5625 14.0862Z"
        fill={fill || "#717274"}
        className="group-hover:fill-secondaryColor"
      />
      <path
        d="M21.375 17.5862H12.625C12.38 17.5862 12.1875 17.3937 12.1875 17.1487C12.1875 16.9037 12.38 16.7112 12.625 16.7112H21.375C21.62 16.7112 21.8125 16.9037 21.8125 17.1487C21.8125 17.3937 21.62 17.5862 21.375 17.5862Z"
        fill={fill || "#717274"}
        className="group-hover:fill-secondaryColor"
      />
      <path
        d="M19.1875 21.0862H14.8125C14.5675 21.0862 14.375 20.8937 14.375 20.6487C14.375 20.4037 14.5675 20.2112 14.8125 20.2112H19.1875C19.4325 20.2112 19.625 20.4037 19.625 20.6487C19.625 20.8937 19.4325 21.0862 19.1875 21.0862Z"
        fill={fill || "#717274"}
        className="group-hover:fill-secondaryColor"
      />
    </svg>
  );
};

export default FilterSvg;
