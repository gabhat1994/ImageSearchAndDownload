import React from "react";
import "../imageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const imgs = props.foundImages.map((img) => {
    return <ImageCard image={img} />;
  });
  return <div className="image__list">{imgs}</div>;
};

export default ImageList;
