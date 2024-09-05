import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Flex } from "@radix-ui/themes";

export default function Layout(): JSX.Element {
  return (
    <>
      <Flex justify="center" align="center">
        <Navbar />
      </Flex>
      <Flex justify="center" align="center" className="outlet">
        <Outlet />
      </Flex>
    </>
  );
}
