import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Foot from "../components/foot";

const Root = () => {
  return (
    <div>
      <div className="h-16">
        <Nav></Nav>
      </div>
      <div className='min-h-[calc(100vh-120px)]'>
        <Outlet></Outlet>
      </div>
      <Foot></Foot>
    </div>
  );
};

export default Root;
