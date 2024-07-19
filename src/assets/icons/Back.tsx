const BackBtnSvg = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="28px"
      width="28px"
      viewBox="0 -960 960 960"
      fill="blue"
      className={className}
      onClick={onClick}
    >
      <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
    </svg>
  );
};

export default BackBtnSvg;
