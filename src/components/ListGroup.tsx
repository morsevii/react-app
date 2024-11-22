import { useState } from "react";

function ListGroup() {
  var items = ["Apple", "Mango", "Banana", "Kiwi", "Orange"];
  //let selectedIndex = 0;
  //items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Fruits</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
