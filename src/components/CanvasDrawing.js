import React, { useRef, useState, useEffect } from 'react';

const CanvasDrawing = ({ image }) => {
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    const [brushSize, setBrushSize] = useState(10); // Default brush size
    const [maskImage, setMaskImage] = useState(null); // To hold the mask image
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

    // Image Load and Canvas Resizing
    useEffect(() => {
        if (image && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = image;

            img.onload = () => {
                // Resize the canvas to match the image dimensions
                canvas.width = img.width;
                canvas.height = img.height;

                // Draw the image onto the canvas
                ctx.drawImage(img, 0, 0);
            };
        }
    }, [image]);

    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'white';
        setDrawing(true);

        // Update last position to start drawing from there
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setLastPosition({ x, y });

        draw(e); // Start drawing immediately when mouse is down
    };

    const stopDrawing = () => {
        setDrawing(false);
    };

    const draw = (e) => {
        if (!drawing) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(lastPosition.x, lastPosition.y); // Start from the last position
        ctx.lineTo(x, y); // Draw a line to the current mouse position
        ctx.stroke();

        // Update the last position for the next draw
        setLastPosition({ x, y });
    };

    const handleMouseMove = (e) => {
        draw(e);
    };

    const handleBrushChange = (e) => {
        setBrushSize(e.target.value);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const img = new Image();
        img.src = image;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    };

    const exportMask = () => {
        const canvas = canvasRef.current;
        const maskDataURL = canvas.toDataURL('image/png');
        setMaskImage(maskDataURL); // Save mask image
        const link = document.createElement('a');
        link.href = maskDataURL;
        link.download = 'mask.png';
        link.click();
    };

    return (
        <div className="canvas-container">
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={handleMouseMove}
                onMouseLeave={stopDrawing}
            />
            <div className="controls">
                <label>Brush Size</label>
                <input
                    type="number"
                    value={brushSize}
                    onChange={handleBrushChange}
                    min="1"
                    max="50"
                />
                <button onClick={clearCanvas}>Clear</button>
                <button onClick={exportMask}>Export Mask</button>
            </div>

            {/* Display both original image and mask side by side */}
            {maskImage && (
                <div className="preview-container">
                    <div>
                        <h3>Original Image</h3>
                        <img src={image} alt="Original" />
                    </div>
                    <div>
                        <h3>Generated Mask</h3>
                        <img src={maskImage} alt="Generated Mask" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CanvasDrawing;
