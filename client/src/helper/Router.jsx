import { Route, Routes } from "react-router-dom";
import { Home, Menu, Auth } from "../pages/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default Router;
