import React from "react";
import Button from "./Button";

interface Props {
  items: string[];
  onSelectMenu: (item: string) => void;
}

const Menu = ({ items, onSelectMenu }: Props) => {
  return (
    <div className="Menu">
      <ul className="list" key={"Menu-list"}>
        {items.map((item, index) => (
          <Button onClick={() => onSelectMenu(item)} color="outline-dark">
            {item}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
