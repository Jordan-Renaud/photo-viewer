import { useState } from "react";
import PhotoViewer from "./components/PhotoViewer";
import { imageUrls } from "./data/ImageUrls";
import "./App.css";

function App() {
  const [selectedUrl, setSelectedUrl] = useState(imageUrls[0]);

  return (
    <div className="App">
      <h1>React Photo Viewer</h1>
      <img className="largeImage" src={selectedUrl} alt="gg" />
      <div className="photoContainer">
        {imageUrls.map((url, index) => (
          <PhotoViewer
            imageUrl={url}
            key={index}
            setSelectedUrl={setSelectedUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
