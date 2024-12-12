Image Masking Tool
This project was bootstrapped with Create React App.

Getting Started
To run the Image Masking Tool project locally, follow these instructions.

Prerequisites
Before you begin, make sure you have the following installed on your machine:

Node.js (version 14.x or above)
npm (Node Package Manager)
Available Scripts
In the project directory, you can run:

npm install
Installs the dependencies required to run the project locally.

npm start
Runs the app in the development mode.\
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.\
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about deployment for more information.

npm run eject
Note: This is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project and copy all configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) into your project for full control.

Libraries Used
React: A JavaScript library for building user interfaces.
React DOM: Renders React components to the DOM.
Canvas API: Used for drawing the mask on the image.
CSS: For styling the app, including animations and responsiveness.


Challenges Faced and How I Overcame Them
1. Canvas Drawing Functionality
Challenge: It was difficult to ensure that the mask was drawn correctly on the uploaded image, with proper alignment and scaling.
Solution: I used React's useRef to manipulate the canvas and ensured that the canvas size matched the uploaded image's dimensions to keep the drawing aligned.

2. Brush Size Adjustment
Challenge: Dynamically adjusting the brush size during drawing was tricky.
Solution: I used React state (useState) to store the brush size and passed it to the canvas drawing function to adjust the line width in real time.

3. Canvas Resizing
Challenge: Resizing the canvas according to the uploaded image while preserving the aspect ratio was challenging.
Solution: I used useEffect to dynamically adjust the canvas size when a new image was uploaded, ensuring that it matched the image’s aspect ratio.

4. Exporting the Mask
Challenge: Saving the drawn mask correctly with the white areas representing the mask and black areas for the background was complex.
Solution: I used the canvas.toDataURL('image/png') function to export the mask as a PNG file, ensuring that the drawn area was white and the background was black.

License
This project is open-source and available under the MIT License.

