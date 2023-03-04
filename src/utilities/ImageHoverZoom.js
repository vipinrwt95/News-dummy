import React from "react";

const ImageHoverZoom = (props) => {
  return (
    <div className="img-wrapper">
      <img  fluid src={props.image} alt="image not found" className="hover-zoom" width="100%" height="400px" />
    </div>
  );
};
export default ImageHoverZoom;