/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { NavLinks } from "../helper/content";
import styles from "../helper/style";

const Header = ({ background, hide }) => {
  return (
    <div
      className={`h-[60px] flex justify-between ${
        styles.paddingX
      } items-center relative z-10 ${background && "bg-primary"}`}
    >
      <div>
        <Link
          className="text-4xl font-extrabold text-white cursor-pointer"
          to="/"
        >
          Coffee
        </Link>
      </div>
      <div className={`flex gap-4 cursor-pointer ${hide && 'hidden'}`}>
        {NavLinks.map((navItem) => (
          <Link
            key={navItem.id}
            className="text-white font-bold text-xl hover:underline transition-all delay-75"
            to={navItem.path}
          >
            {navItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
