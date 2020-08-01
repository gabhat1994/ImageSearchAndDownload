import Popup from "reactjs-popup";
import React from "react";
function ImagePage(props) {
  const closeModal = () => {
    props.closeModal();
  };
  return (
    <Popup open={props.isOpen} closeOnDocumentClick onClose={closeModal}>
      <div className="modal">
        <a className="close" onClick={closeModal}>
          &times;
        </a>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
        omnis delectus nemo, maxime molestiae dolorem numquam mollitia,
        voluptate ea, accusamus excepturi deleniti ratione sapiente! Laudantium,
        aperiam doloribus. Odit, aut.
      </div>
    </Popup>
  );
}

export default ImagePage;
