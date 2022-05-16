import PhotoViewer from "./components/PhotoViewer";
import { imageUrls } from "./data/ImageUrls";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Photo Viewer</h1>
      <div className="photoContainer">
        {imageUrls.map((url, index) => (
          <PhotoViewer imageUrl={url} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
