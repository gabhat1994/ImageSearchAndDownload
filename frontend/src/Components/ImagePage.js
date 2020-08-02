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
        <div className="modal-class">
          <img
            src={props.image.urls.regular}
            alt={props.image.alt_description}
          />
          <br />
          <button onClick={handleDownload}>Download</button>
        </div>
      </div>
    </Popup>
  );
}

export default ImagePage;
