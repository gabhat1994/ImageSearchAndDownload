import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
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

  render() {
    return (
      <div>
        <img
          ref={this.imageRef}
          key={this.props.image.id}
          src={this.props.image.urls.regular}
          alt={this.props.image.alt_description}
        />
      </div>
    );
  }
}

export default ImageCard;
