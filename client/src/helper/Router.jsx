import { Route, Routes } from "react-router-dom";
import { Home, Menu, Auth } from "../pages/index";
import PrivateOutlet from "../components/PrivateOutlet";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<PrivateOutlet />}>
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
};

export default Router;
