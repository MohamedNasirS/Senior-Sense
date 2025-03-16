import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";
import { Home } from "lucide-react";
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return;
};
export default NotFound;