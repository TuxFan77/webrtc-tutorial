import adapter from "webrtc-adapter";

// Get video / audio feed from webcam
navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then((stream) => {
    console.log(stream);
    document.querySelector(".local-video").srcObject = stream;
  })
  .catch(console.log);
