import { useContext } from "react";
import { userAuthContext } from "./UserAuthContext";

const useUserAuth = () => {
  return useContext(userAuthContext);
};

export default useUserAuth;
