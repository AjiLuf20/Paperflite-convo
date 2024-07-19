const EyeSvg = ({ fill }: { fill?: string }) => {
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
        d="M17 22.25C14.0162 22.25 11.5137 19.7562 10.1662 17.42C10.0175 17.1575 10.0175 16.8338 10.1662 16.5712C11.5137 14.2438 14.0162 11.75 17 11.75C19.9838 11.75 22.4862 14.2437 23.8338 16.58C23.9825 16.8425 23.9825 17.1662 23.8338 17.4288C22.495 19.765 19.9925 22.2587 17.0087 22.2587L17 22.25ZM10.9363 17C12.1 19.0212 14.3925 21.375 17 21.375C19.6075 21.375 21.9087 19.0125 23.0725 16.9825C21.9087 14.9875 19.6163 12.625 17 12.625C14.3837 12.625 12.1 14.9787 10.9363 17Z"
        fill={fill || "#717274"}
        className="group-hover:fill-secondaryColor"
      />
      <path
        d="M17 19.1875C15.7925 19.1875 14.8125 18.2075 14.8125 17C14.8125 15.7925 15.7925 14.8125 17 14.8125C18.2075 14.8125 19.1875 15.7925 19.1875 17C19.1875 18.2075 18.2075 19.1875 17 19.1875ZM17 15.6875C16.2738 15.6875 15.6875 16.2738 15.6875 17C15.6875 17.7262 16.2738 18.3125 17 18.3125C17.7262 18.3125 18.3125 17.7262 18.3125 17C18.3125 16.2738 17.7262 15.6875 17 15.6875Z"
        fill={fill || "#717274"}
        className="group-hover:fill-secondaryColor"
      />
    </svg>
  );
};

export default EyeSvg;