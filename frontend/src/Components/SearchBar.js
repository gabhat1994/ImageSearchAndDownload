import React, { Component } from "react";
import { ReactComponent as SearchIcon } from "../images/search.svg";
class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="Search">
          <input
            type="text"
            placeholder="Search for Images here.."
            className="Search-input"
          />
          <button type="submit">
            <SearchIcon height="24px" width="24px" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
