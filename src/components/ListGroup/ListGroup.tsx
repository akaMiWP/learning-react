import { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length == 0 && <p>No Items found</p>}
      <ul className="list-group">
        {props.items.map((item, index) => {
          return (
            <li
              key={item}
              className={
                selectedIndex == index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                props.onSelectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
