import React from "react";
import "./PhotoViewer.css";

export default function PhotoViewer({ imageUrl }) {
  return (
    <div className="PhotoViewer">
      <img className="photo" src={imageUrl} alt="gg" />
    </div>
  );
}
