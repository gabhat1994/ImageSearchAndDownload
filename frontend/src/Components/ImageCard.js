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

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spanRows = Math.ceil(height / 10);
    this.setState({ spans: spanRows });
  };

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
        <div>
          <img
            role="button"
            ref={this.imageRef}
            key={this.props.image.id}
            src={this.props.image.urls.regular}
            alt={this.props.image.alt_description}
            onClick={this.onClick}
          />
        </div>
        {this.state.popup && (
          <ImagePage isOpen={this.state.popup} closeModal={this.onClose} />
        )}
      </div>
    );
  }
}

export default ImageCard;
