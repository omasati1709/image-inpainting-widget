import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            onImageUpload(imageUrl); // Pass the image URL to the parent
        }
    };

    return (
        <div className="file-upload-container">
            <h2>Upload an Image</h2>
            <div className="file-upload">
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    id="file-upload"
                />
                <label htmlFor="file-upload">Choose File</label>
            </div>
            {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />}
        </div>
    );
};

export default ImageUpload;
