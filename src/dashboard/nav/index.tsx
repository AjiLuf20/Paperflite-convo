import useIsMobile from "../../hooks/useMobile";

import SearchGradientSvg from "../../assets/icons/SearchGradient";
import Nav1Svg from "../../assets/icons/Nav1";
import Nav2Svg from "../../assets/icons/Nav2";
import Nav3Svg from "../../assets/icons/Nav3";
import Nav4Svg from "../../assets/icons/Nav4";
import Nav5Svg from "../../assets/icons/Nav5";
import Nav6Svg from "../../assets/icons/Nav6";
import Avatar1 from "../../assets/images/avatar-1.png";

const Nav = () => {
  const isMobile = useIsMobile();
  return (
    <nav className="py-4 sm:py-10 px-2 border-t sm:border-r order-3 sm:order-1 min-w-[60px]">
      {isMobile ? (
        <div className="flex h-full justify-between px-5 items-center max-w-[400px] mx-auto">
          <Nav1Svg />
          <Nav2Svg />
          <Nav3Svg />
        </div>
      ) : (
        <div className="flex flex-col gap-9 h-full justify-center items-center">
          <SearchGradientSvg />
          <Nav1Svg />
          <Nav2Svg />
          <Nav3Svg />
          <Nav4Svg />
          <Nav5Svg />
          <Nav6Svg />
          <img src={Avatar1} alt="profile" width={35} height={35} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
