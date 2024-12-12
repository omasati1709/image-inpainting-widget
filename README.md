# Image Masking Tool

This project is an **Image Masking Tool** created using **React**. It allows users to upload an image, draw a mask on it, and save the mask as an image.


### Getting Started

To run the **Image Masking Tool** project locally, follow these steps.

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (version 14.x or above)
- **npm** (Node Package Manager)


## Run Locally


### Clone the repository
```
git clone https://github.com/omasati1709/image-masking-tool.git

```

### Navigate into the project directory
```
cd image-masking-tool
```

### Install dependencies
```
npm install
```

### Start the development server
```
npm start
```
    
## Libraries Used

- **React:** A JavaScript library for building user interfaces.
- **React DOM:** Renders React components to the DOM.
- **Canvas API:** Used for drawing the mask on the image.
- **CSS:** For styling the app, including animations and responsiveness

### Challenges Faced and Solutions

#### *1. Canvas Drawing Functionality*
- **Challenge:** It was difficult to ensure that the mask was drawn correctly on the uploaded image, with proper alignment and scaling.
- **Solution:** Used React's useRef to manipulate the canvas and ensured that the canvas size matched the uploaded image's dimensions to keep the drawing aligned.

#### *2. Brush Size Adjustment*
- **Challenge:** Dynamically adjusting the brush size during drawing was tricky.
- **Solution:** Used React state (useState) to store the brush size and passed it to the canvas drawing function to adjust the line width in real-time.

#### *3. Canvas Resizing*
- **Challenge:** Resizing the canvas according to the uploaded image while preserving the aspect ratio was challenging.
- **Solution:** Used useEffect to dynamically adjust the canvas size when a new image was uploaded, ensuring that it matched the image’s aspect ratio.

#### *4. Exporting the Mask*
- **Challenge:** Saving the drawn mask correctly with the white areas representing the mask and black areas for the background was complex.
- **Solution:** Used the canvas.toDataURL('image/png') function to export the mask as a PNG file, ensuring that the drawn area was white and the background was black.




## License

[MIT](https://choosealicense.com/licenses/mit/)

