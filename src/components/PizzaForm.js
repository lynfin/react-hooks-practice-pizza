import React, { useState, useEffect } from "react";
const noPizza = {
  name: "",
  topping: "",
  vegetarian: false,
};
function PizzaForm({ pizzaId }) {
  const [formData, setFormData] = useState(noPizza);
  const { topping, vegetarian, size } = formData;

  useEffect(() => {
    if (pizzaId !== 0) {
      fetch(`http://localhost:3001/pizzas/${pizzaId}`)
        .then((r) => r.json())
        .then((pizza) => setFormData(pizza));
    } else {
      setFormData(noPizza);
    }
  }, [pizzaId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={null /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={topping}
            onChange={handleChange}
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
