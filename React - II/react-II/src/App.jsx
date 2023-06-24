import "./App.css";
import React, { Component } from "react";
import Pizza from "./Example";

// function App() {
//   return (
//     <div>
//       My First React App
//     </div>
//   )
// }

//Class Component

class App extends Component {
  render() {
    let dynamicName = "React is mind blowing";
    let brand = "PizzaHut"
    let description = "Best Pizza in town"
    let brand2 = "Dominos"
    let description2 = "Best Pizza in town "
    return (
      <div>
        <h1>{dynamicName}</h1>
        <Pizza brand = {brand} description = {description}/>
        <Pizza brand = {brand2} description = {description2}/>
      </div>
    );
  }
}

export default App;
