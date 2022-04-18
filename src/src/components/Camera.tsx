import { useRef } from "react";

const Camera = () => {
    const videoRef: any = useRef(null);
  
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({video: {}})
        .then(stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => console.error("Camera Error:", err));
    };

    getVideo();
    
    return <div className="camera">
        <video ref={videoRef} />
    </div>
}
  
export default Camera;
  