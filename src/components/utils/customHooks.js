import { useState } from "react";

export const useLoading = () => {
  const [isLoading, setLoading] = useState(true);

  const stopLoading = () => setLoading(false);
  const LoadingComponent = ({ children, isLoading }) => {
    if (isLoading) {
      return (
        <div role="status" className=" flex items-center justify-center m-4">
          <p className=" dark:text-white">Loading...</p>
        </div>
      );
    }
    return children;
  };

  return [isLoading, stopLoading, LoadingComponent];
};
