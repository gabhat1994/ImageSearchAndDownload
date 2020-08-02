import React, { Component } from "react";
import { ReactComponent as SearchIcon } from "../images/search.svg";
class SearchBar extends Component {
  state = { val: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userSubmit(this.state.val);
  };

  onInputChange = (event) => {
    this.setState({ val: event.target.value });
  };
  render() {
    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search for Images here.."
          className="Search-input"
          onChange={this.onInputChange}
          value={this.state.val}
        />

        <SearchIcon height="24px" width="24px" />
      </form>
    );
  }
}

export default SearchBar;
