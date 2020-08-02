import Popup from "reactjs-popup";
import React from "react";
function ImagePage(props) {
  const closeModal = () => {
    props.closeModal();
  };

  const handleDownload = (event) => {
    event.preventDefault();
  };
  return (
    <Popup open={props.isOpen} closeOnDocumentClick onClose={closeModal}>
      <div className="modal">
        <a className="close" onClick={closeModal}>
          &times;
        </a>

        <img
          style={{ marginLeft: "5px", marginRight: "5px" }}
          src={props.image.urls.regular}
          alt={props.image.alt_description}
          width="700px"
          height="450px"
        />
        <br />
        <button style={{ marginLeft: "300px" }} onClick={handleDownload}>
          Download
        </button>
      </div>
    </Popup>
  );
}

export default ImagePage;
