import React from "react";

function Pizza({ pizza, onModifyPizza }) {
  const { topping, size, vegetarian, id } = pizza;
  const handleClick = (e) => {
    onModifyPizza(id);
  };
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
