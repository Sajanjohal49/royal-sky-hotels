import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GallleryPage from "./components/GalleryComponent/GallleryPage";
import AllHotelsPage from "./components/AllHotelsComponents/AllHotelsPage";
import LoginPage from "./components/LoginComponent/LoginPage";
import PageLayout from "./components/RouterSettings/PageLayout";
import UserRegister from "./components/RegisterComponent/UserRegister";
import Hotel from "./components/HotelComponent/Hotel";
import ScrollToTop from "./components/RouterSettings/ScrollToTop";
import AdminDashborard from "./components/AdminDashboard/AdminDashborard";
import CustomerAllBookings from "./components/CustomerDashboard/CustomerAllBookings";
import AddHotelReview from "./components/CustomerDashboard/AddHotelReview";
import RoleHomePage from "./components/HomePageComponent/RoleHomePage";
import HotelManagerDashboard from "./components/HotelManagerDashboard/HotelManagerDashboard";
import EditBookingStatus from "./components/HotelManagerDashboard/EditBookingStatus";
import AddHotelFacilities from "./components/HotelManagerDashboard/AddHotelFacilities";
import SkeletonNavbar from "./components/NavbarComponent/Skeleton/SkeletonNavbar";
import { useEffect, useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  if (isLoading) {
    return <SkeletonNavbar />;
  }
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<RoleHomePage />} />
            <Route path="/home" element={<RoleHomePage />} />
            <Route
              path="/home/hotel/location/allHotels"
              element={<RoleHomePage />}
            />
            <Route
              path="/home/hotel/location/:locationId/:locationName"
              element={<RoleHomePage />}
            />
            <Route
              path="/hotel/:hotelId/location/:locationId"
              element={<Hotel />}
            />
            <Route path="/admin/dashboard" element={<AdminDashborard />} />
            <Route
              path="/hotelManager/allbookings"
              element={<HotelManagerDashboard />}
            />
            <Route
              path="/customer/allbookings"
              element={<CustomerAllBookings />}
            />
            <Route path="/gallery" element={<GallleryPage />} />

            <Route path="/allHotels" element={<AllHotelsPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/customer/register" element={<UserRegister />} />
            <Route
              path="/hotel/:hotelId/location/:locationId/customer/:userId/review"
              element={<AddHotelReview />}
            />
            <Route path="/hotelManager/register" element={<UserRegister />} />
            <Route path="/admin/register" element={<UserRegister />} />
            <Route path="/booking/:bookingId" element={<EditBookingStatus />} />
            <Route
              path="/hotel/:hotelId/location/:locationId/add/facility"
              element={<AddHotelFacilities />}
            />
          </Route>
        </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
