import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

// ┌ └ ─ ├ │
// App [pizzas]
//  ├ Header
//  ├ PizzaForm
//  └ PizzaList
//      └ Pizza

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaToModify, setPizzaToModify] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((pizzas) => setPizzas(pizzas));
  }, []);

  const handleModifyPizza = (id) => {
    setPizzaToModify(id);
  };

  const handleUpdatedPizza = (newPizza) => {
    setPizzas(
      pizzas.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };
  return (
    <>
      <Header />
      <PizzaForm pizzaId={pizzaToModify} onUpdatePizza={handleUpdatedPizza} />
      <PizzaList pizzas={pizzas} onModifyPizza={handleModifyPizza} />
    </>
  );
}

export default App;
