
import React from "react";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const CustomButton = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  children,
  className,
  ...props
}: CustomButtonProps) => {
  const baseStyles = "relative rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 active:scale-[0.98]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]",
    outline: "border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 active:scale-[0.98]",
    text: "text-primary hover:bg-blue-50 hover:underline underline-offset-4",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-6 py-3 gap-2.5",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
      <span className={cn(
        "absolute -z-10 inset-0 rounded-lg opacity-0 transition-opacity duration-300",
        variant === "primary" ? "bg-white/10" : "bg-black/5"
      )}></span>
    </button>
  );
};

export default CustomButton;
