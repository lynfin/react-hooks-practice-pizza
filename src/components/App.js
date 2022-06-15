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

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((pizzas) => setPizzas(pizzas));
  }, []);
  console.log("Pizza count", pizzas.length);
  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export default App;
