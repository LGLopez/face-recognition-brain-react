import React from 'react';

const FaceRecognition = ( {imageURL} ) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img className="shadow-4" alt="" src={imageURL} width="500" height="auto" />
            </div>
        </div>
    );
}

export default FaceRecognition;