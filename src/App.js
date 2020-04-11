import React, { Component } from "react";
import "./App.css";

import CardList from "./components/CardList/CardList";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filterName: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }
  render() {
    const { monsters, filterName } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster["name"].toLowerCase().includes(filterName.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBar
          placeholder="Type name"
          handleChange={(e) => this.setState({ filterName: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
