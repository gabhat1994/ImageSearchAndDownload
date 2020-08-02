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
          <div style={{ marginTop: "-47px" }}>
            <img
              key={this.props.image.id}
              style={{ borderRadius: "50%", marginLeft: "-194px" }}
              src={this.props.image.user.profile_image.small}
            />
            <div style={{ marginTop: "-22px", marginLeft: "10px" }}>
              <label style={{ color: "white" }} key={this.props.image.id}>
                image by {this.props.image.user.first_name}{" "}
                {this.props.image.user.last_name}{" "}
              </label>
            </div>
          </div>
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
