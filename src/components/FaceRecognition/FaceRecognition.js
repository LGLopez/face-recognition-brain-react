import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ( { box, imageURL} ) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputImage" className="shadow-4" alt="" src={imageURL} width="500" height="auto" />
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;