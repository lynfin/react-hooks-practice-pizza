import React from "react";

function Pizza({ pizza, onModifyPizza }) {
  const { topping, size, vegetarian, id } = pizza;
  const handleSelect = (e) => {
    onModifyPizza(id);
  };
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          onSelect={handleSelect}
          type="button"
          className="btn btn-primary"
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
