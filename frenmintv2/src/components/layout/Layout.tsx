import { Outlet } from "react-router-dom";
import Navigation from "../navigation";
import Footer from "./footer";
function Layout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navigation />
      <div className="border flex-grow">
        <Outlet />
      </div>
      <div className="bottom-0 md:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
