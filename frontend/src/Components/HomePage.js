import SearchBar from "./SearchBar";
import React, { Component } from "react";
import axios from "axios";
import ImageList from "./ImageList";

class HomePage extends Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    console.log(term, "term");
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/",
      {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID o7dYoGTAAYKjip1p_dFQ6BJvbbAvLuxY6v_SDnbxsCw",
        },
      }
    );

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div>
        <SearchBar userSubmit={this.onSearchSubmit} />
        <span>{this.state.images.length} images</span>
        <ImageList foundImages={this.state.images} />
      </div>
    );
  }
}

export default HomePage;
