import React, { useState } from 'react';
import './global.css';
import ImageUpload from './components/ImageUpload';
import CanvasDrawing from './components/CanvasDrawing';

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (imageUrl) => {
    setIsLoading(true);
    setImage(imageUrl);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Image Inpainting Widget</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {image && <CanvasDrawing image={image} />}

      {isLoading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default App;
