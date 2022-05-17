import React from "react";
import "./PhotoViewer.css";

export default function PhotoViewer({ imageUrl, setSelectedUrl }) {
  return (
    <div className="PhotoViewer">
      <img
        className="photoSmall"
        src={imageUrl}
        alt="gg"
        onClick={() => setSelectedUrl(imageUrl)}
      />
    </div>
  );
}
