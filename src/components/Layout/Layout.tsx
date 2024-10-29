import Header from "../Header/Header.tsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
