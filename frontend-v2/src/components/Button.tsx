import React from "react";

interface Props {
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    onClick: () => void;
    radius?: string
    width?: string;
  }

export const Button: React.FC<Props> = ({
    border,
    color,
    height,
    onClick,
    radius,
    width,
    children
}) => {
    return(
        <button 
        onClick={onClick}
        style={{
           backgroundColor: color,
           border,
           borderRadius: radius,
           height,
           width
        }}
      >
      {children}
      </button>
    )
}