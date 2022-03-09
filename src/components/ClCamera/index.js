import React, { Component } from "react";
import axios from "axios";

class camera extends Component {
     constructor() {
          super();

          this.cameraNumber = 0;

          this.state = {
               imageDataURL: null,
          };
     }



     initializeMedia = async () => {
          this.setState({ imageDataURL: null });

          if (!("mediaDevices" in navigator)) {
               navigator.mediaDevices = {};
          }

          if (!("getUserMedia" in navigator.mediaDevices)) {
               navigator.mediaDevices.getUserMedia = function (constraints) {
                    var getUserMedia =
                         navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                    if (!getUserMedia) {
                         return Promise.reject(new Error("getUserMedia Not Implemented"));
                    }

                    return new Promise((resolve, reject) => {
                         getUserMedia.call(navigator, constraints, resolve, reject);
                    });
               };
          }

          //Get the details of video inputs of the device
          const videoInputs = await this.getListOfVideoInputs();

          //The device has a camera
          if (videoInputs.length) {
               navigator.mediaDevices
                    .getUserMedia({
                         video: {
                              deviceId: {
                                   exact: videoInputs[this.cameraNumber].deviceId,
                              },
                         },
                    })
                    .then((stream) => {
                         this.player.srcObject = stream;
                    })
                    .catch((error) => {
                         console.error(error);
                    });
          } else {
               alert("The device does not have a camera");
          }
     };

     capturePicture = async () => {
          var canvas = document.createElement("canvas");
          canvas.width = this.player.videoWidth;
          canvas.height = this.player.videoHeight;
          var contex = canvas.getContext("2d");
          contex.drawImage(this.player, 0, 0, canvas.width, canvas.height);
          this.player.srcObject.getVideoTracks().forEach((track) => {
               track.stop();
          });

          console.log(canvas.toDataURL());
          this.setState({ imageDataURL: canvas.toDataURL() });

     };

     switchCamera = async () => {
          const listOfVideoInputs = await this.getListOfVideoInputs();

          // The device has more than one camera
          if (listOfVideoInputs.length > 1) {
               if (this.player.srcObject) {
                    this.player.srcObject.getVideoTracks().forEach((track) => {
                         track.stop();
                    });
               }

               // switch to second camera
               if (this.cameraNumber === 0) {
                    this.cameraNumber = 1;
               }
               // switch to first camera
               else if (this.cameraNumber === 1) {
                    this.cameraNumber = 0;
               }

               // Restart based on camera input
               this.initializeMedia();
          } else if (listOfVideoInputs.length === 1) {
               alert("The device has only one camera");
          } else {
               alert("The device does not have a camera");
          }
     };

     getListOfVideoInputs = async () => {
          // Get the details of audio and video output of the device
          const enumerateDevices = await navigator.mediaDevices.enumerateDevices();

          //Filter video outputs (for devices with multiple cameras)
          return enumerateDevices.filter((device) => device.kind === "videoinput");
     };

     uploadImage = () => {
          if (this.props.offline) {
               console.log("you're using in offline mode sha");

               // save image to local storage
          } else {
               this.setState({ uploading: true });
               axios
                    .post(`https://api.cloudinary.com/v1_1/dw8s775hb/image/upload`, {
                         file: this.state.imageDataURL,
                         upload_preset: "weddingupload"
                    })
                    .then(data => {
                         this.setState({ uploading: false });
                         if (data.status === 200) {
                              console.log(data);
                              alert("Image Uploaded successfully");
                              window.location.reload();
                         } else {
                              alert("Sorry, we encountered an error uploading your image");
                              window.location.reload();
                         }
                    })
          }
     };

     checkUploadStatus = data => {
          this.setState({ uploading: false });
          if (data.status === 200) {
               alert("Image Uploaded to Cloudinary Media Library");
               this.discardImage();
          } else {
               alert("Sorry, we encountered an error uploading your image");
          }
     };

     render() {
          const playerORImage = Boolean(this.state.imageDataURL) ? (
              <div className="capturedImg"> <img src={this.state.imageDataURL} alt="cameraPic" /></div>
          ) : (
               <div className="videocenter">
                    <video
                         ref={(refrence) => {
                              this.player = refrence;
                         }}
                         autoPlay
                    ></video></div>
          );


          return (
               <div className="App">
                    {playerORImage}
                    <button className="takeButton" onClick={this.initializeMedia}>Open Camera</button>
                    <button className="captureButton" onClick={this.capturePicture}>Capture</button>

                    <button className="uploadButton" onClick={this.uploadImage}> Upload Photo
                    </button>
                    <button className="switchButton" onClick={this.switchCamera}>Switch Camera</button>


               </div>
          );
     }
}


export default camera;