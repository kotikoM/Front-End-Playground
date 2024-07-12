import "./App.css";
import Toggle from "./components/Toggle";
import Store from "./components/Store";

function App() {
  const items = [
    { img: "images/coffee.png", description: "Milk coffee", price: 20000 },
    { img: "images/coffee.png", description: "Earl gray milk tea", price: 20000 },
    { img: "images/coffee.png", description: "Oreo coffee", price: 15000 },
    { img: "images/coffee.png", description: "Pudding milk tea", price: 10000 },
  ];

  return (
    <>
      <Toggle />
      <Store items={items}/> 
    </>
  );
}

export default App;
