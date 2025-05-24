
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <CustomButton icon={<Home size={18} />}>
            Return to Home
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
