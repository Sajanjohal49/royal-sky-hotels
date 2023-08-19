import { React } from "react";
import ReservationForm from "./ReservationForm";

const StickySection = ({ hotel }) => {
  return (
    <div className="relative flex justify-end">
      <div className="mx-auto ">
        <div className="mt-20 text-gray-900 bg-white border shadow-xl border-slate-300 rounded-xl">
          <p className="pt-5 pb-2 text-xl font-semibold text-center">
            {hotel.pricePerDay} CAD /<span className="text-sm">night</span>
          </p>
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};

export default StickySection;
