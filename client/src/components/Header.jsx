/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { NavLinks } from "../helper/content";
import styles from "../helper/style";
import { userAuthContext } from "../Context/UserAuthContext";
import { useContext } from "react";
import useUserAuth from "../Context/useUserAuth";
import Toast from "./Toast";
import { toast } from "react-toastify";

const Header = ({ background, hide }) => {
  const authUser = useContext(userAuthContext);
  const { logOut } = useUserAuth();
  let render = authUser?.user?.accessToken ? 1 : 2;
  const navigate = useNavigate();
  const notify = (message) => toast(message);

  const handleLogout = async () => {
    try {
      await logOut();
      notify("User Logged out");
      navigate("/");
    } catch (error) {
      notify("Something went wrong!");
    }
  };

  return (
    <>
      <Toast />
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
        <div
          className={`flex gap-4 items-center cursor-pointer ${
            hide && "hidden"
          }`}
        >
          {NavLinks.slice(0, render).map((navItem) => (
            <Link
              key={navItem.id}
              className="text-white font-bold text-xl hover:underline transition-all delay-75"
              to={navItem.path}
            >
              {navItem.title}
            </Link>
          ))}
          {authUser?.user?.accessToken && (
            <p
              onClick={handleLogout}
              className="text-red-600 font-bold text-xl hover:underline transition-all delay-75"
            >
              Logout
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
