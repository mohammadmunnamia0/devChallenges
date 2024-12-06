import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Foot from "../components/foot";

const Root = () => {
  return (
    <div>
      <div className="h-20">
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};

export default Root;
