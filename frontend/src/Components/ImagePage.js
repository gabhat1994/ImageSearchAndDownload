import Modal from "react-modal";
import React from "react";
function ImagePage(props) {
  const closeModal = () => {
    props.closeModal();
  };

  const handleDownload = (event) => {
    event.preventDefault();
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal">
        <a className="close" onClick={closeModal}>
          &times;
        </a>

        <div style={{ marginLeft: "100px" }}>
          <img
            style={{ borderRadius: "50%" }}
            src={props.image.user.profile_image.small}
            alt={props.image.alt_description}
          />
          <div style={{ marginTop: "-35px", marginLeft: "45px" }}>
            <label>
              {props.image.user.first_name} {props.image.user.last_name}{" "}
            </label>
            <br />
            <label>@{props.image.user.instagram_username}</label>
          </div>
        </div>
        <div style={{ marginLeft: "100px" }}>
          <img
            style={{
              marginLeft: "5px",
              marginRight: "5px",
              marginTop: "45px",
            }}
            src={props.image.urls.regular}
            alt={props.image.alt_description}
          />
          <button
            style={{ marginLeft: "450px", marginTop: "10px" }}
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ImagePage;
