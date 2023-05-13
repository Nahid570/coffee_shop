import { Navigate, Outlet } from "react-router-dom";
import useUserAuth from "../Context/useUserAuth";

const PrivateOutlet = () => {
  const authUser = useUserAuth();
  return authUser?.user?.accessToken ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateOutlet;
