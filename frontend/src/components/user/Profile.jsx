import React, { useEffect, useRef } from 'react'

const Profile = () => {
  const camRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      width: 640, 
      height: 480 
    }).then(function(stream) {
      camRef.current.srcObject = stream;
      // VIDEO.src = URL.createObjectURL(stream);
      // console.log(stream);
      // VIDEO.addEventListener('loadeddata', function() {
      //   videoPlaying = true;
      //   // ENABLE_CAM_BUTTON.classList.add('removed');
      // });
    });
  }, [])
  
  return (
    <div>
      <video ref={camRef} muted autoPlay></video>
      <h3>Camera Video  </h3>
    </div>
  )
}

export default Profile