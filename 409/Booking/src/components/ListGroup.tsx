import { useState } from "react";
import Button from "./Button";
interface Props {
  items: string[];
  Heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, Heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{Heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <Button onClick={() => onSelectItem(item)} color="primary">
            {item}
          </Button>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
