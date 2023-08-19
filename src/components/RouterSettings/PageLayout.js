import { Outlet } from "react-router-dom";

import Footer from "../FooterComponent/Footer";
import Navbar from "../NavbarComponent/Navbar";

const PageLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
export default PageLayout;
