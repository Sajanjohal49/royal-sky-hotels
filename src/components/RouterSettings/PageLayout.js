import { Outlet } from "react-router-dom";

import Footer from "../FooterComponent/Footer";
import Navbar from "../NavbarComponent/Navbar";
import { ImageProvider } from "../utils/ImageProvider";

const PageLayout = () => (
  <>
    <ImageProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ImageProvider>
  </>
);
export default PageLayout;
