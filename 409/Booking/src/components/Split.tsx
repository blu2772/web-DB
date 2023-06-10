import React, { ReactElement } from "react";

interface Props {
  Heading: string;
  imagepath: string;
  content: ReactElement;
  orientation?: "L" | "R" | "LT" | "RT" | "RB" | "LB";
  Headingorient?: "L" | "R" | "M";
}

const Split = ({
  imagepath,
  content,
  Heading,
  orientation,
  Headingorient,
}: Props) => {
  const orient1 = () => {
    if (orientation === "L") {
      return "L";
    } else if (orientation == "LT") {
      return "LT";
    } else if (orientation == "LB") {
      return "LB";
    } else if (orientation == "R") {
      return "R";
    } else if (orientation == "RT") {
      return "RT";
    } else if (orientation == "RB") {
      return "RB";
    }
  };
  const orient2 = () => {
    if (orientation == "L" || orientation == "LT" || orientation == "LB") {
      return "R";
    } else {
      return "L";
    }
  };
  const orientT = () => {
    if (Headingorient == "L") {
      return "LT";
    } else if (Headingorient == "R") {
      return "RT";
    } else {
      return "M";
    }
  };
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <h1 className={` ${orientT()}`}>{Heading}</h1>
      <img
        className={` ${orient2()}`}
        style={{
          minWidth: "50%",
          maxWidth: "50%",
          height: "70%",
          maxHeight: "70%",
          position: "absolute",
          borderRadius: "10px",
          top: "10%",
          overflow: "hidden",
          zIndex: "1",
          objectFit: "cover",
        }}
        src={imagepath}
      ></img>
      <div
        className={` ${orient1()}`}
        style={{
          minWidth: "50%",
          maxWidth: "50%",
          height: "49%",
          maxHeight: "70%",
          position: "absolute",
          overflow: "hidden",
          zIndex: "2",
          backgroundColor: "#F1F1F1",
          borderRadius: "20px",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Split;
