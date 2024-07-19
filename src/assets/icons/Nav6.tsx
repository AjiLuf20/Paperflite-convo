const Nav5Svg = ({ fill }: { fill?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group mt-auto cursor-pointer"
    >
      <circle
        cx="4"
        cy="4"
        r="2"
        fill={fill || "#717274"}
        className="group-hover:fill-secondaryColor"
      />
      <circle
        cx="4"
        cy="12"
        r="2"
        fill={fill || "#717274"}
        className="group-hover:fill-secondaryColor"
      />
      <circle
        cx="12"
        cy="4"
        r="2"
        fill={fill || "#717274"}
        className="group-hover:fill-secondaryColor"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        fill={fill || "#717274"}
        className="group-hover:fill-secondaryColor"
      />
    </svg>
  );
};

export default Nav5Svg;
