import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <p id="before-outlet">curt</p>
      <div id="Outlet">
      <Outlet />
      </div>
    </>
  );
}
