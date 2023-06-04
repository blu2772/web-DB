import React from "react";
import Menu from "./Menu";

interface Props {
  imageSrc: string;
  items: string[];
  onSelectPage: (item: string) => void;
}

const Navbar = ({ imageSrc, items, onSelectPage }: Props) => {
  return (
    <div className="navBar">
      <img className="logo" src={imageSrc}></img>
      <Menu onSelectMenu={onSelectPage} items={items}></Menu>
    </div>
  );
};

export default Navbar;
