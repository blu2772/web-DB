import React, { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
}

const Spacer = ({ children }: Props) => {
  const style: CSSProperties = {
    height: children + "px",
  };

  return <div style={style}></div>;
};

export default Spacer;
