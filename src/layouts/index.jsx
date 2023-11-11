import Header from "../components/header";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutPage;
