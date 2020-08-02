import React, { Component } from "react";
import ImagePage from "./ImagePage";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
      popup: false,
    };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  onClick = () => {
    this.setState({ popup: true });
  };

  onClose = () => {
    this.setState({ popup: false });
  };

  render() {
    console.log(this.state.popup, "test");
    return (
      <div>
        <button>
          <img
            role="button"
            ref={this.imageRef}
            key={this.props.image.id}
            src={this.props.image.urls.small}
            alt={this.props.image.alt_description}
            onClick={this.onClick}
            width="250px"
            height="250px"
          />
        </button>

        {this.state.popup && (
          <ImagePage
            isOpen={this.state.popup}
            closeModal={this.onClose}
            image={this.props.image}
          />
        )}
      </div>
    );
  }
}

export default ImageCard;
