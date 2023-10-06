import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export const useLoading = () => {
  const [isLoading, setLoading] = useState(true);

  const stopLoading = () => setLoading(false);
  const LoadingComponent = ({ children, isLoading }) => {
    if (isLoading) {
      return (
        <div role="status" className=" flex items-center justify-center m-4">
          <FaSpinner className="animate-spin text-4xl text-gray-500" />
        </div>
      );
    }
    return children;
  };

  return [isLoading, stopLoading, LoadingComponent];
};
