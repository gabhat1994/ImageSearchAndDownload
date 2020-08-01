import SearchBar from "./SearchBar";
import React, { Component } from "react";

class HomePage extends Component {
  onSearchSubmit = (term) => {
    console.log(term, "term");
  };
  render() {
    return (
      <div>
        <SearchBar userSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default HomePage;
