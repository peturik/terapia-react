import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../pages/pracownie/labs.css";

export default function RootLayout() {
  return (
    <div>
      <Header />
      {/* {children} */}
      <Outlet />
      <Footer />
    </div>
  );
}
