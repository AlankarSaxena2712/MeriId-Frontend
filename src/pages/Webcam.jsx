import React from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={350}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default WebcamComponent;