import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const data=[]
  var blobs=new Blob(data)
  let device = navigator.mediaDevices.getUserMedia({audio:true})
  let recorder;
  device.then(stream=>{
    recorder = new MediaRecorder(stream)
    recorder.ondataavailable = e => {
      data.push(e.data)
      if(recorder.state=='inactive'){
        let blobData= new Blob(data,{type:"audio/ogg" })
        document.getElementById('audio').innerHTML= `<source src="${URL.createObjectURL(blobData)}" type="audio/ogg"/>`
        console.log(blobData)

      }


    }
 

  })
  console.log(blobs)
  const startRec=()=>{
    recorder.start();
  }
  const stopRec=()=>{
    recorder.stop()

  }

  return (
    <div className="App">
     <h2>Opus audio recorder</h2>
     <audio id="audio" controls>

       

       
     </audio>
     <div>     
      <button onClick={startRec}>start</button>
      <button onClick={stopRec}>stop</button>
      </div>

    </div>
  );
}

export default App;
