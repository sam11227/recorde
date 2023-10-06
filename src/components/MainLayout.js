import React from 'react';
import Button from './btn/Button';
import Image from '../img/unnamed.png';
import AudioRecorder from "./AudioRecorder"


import './App.css'; // Import your CSS file

function App() {
    const handleClick = () => {
        alert('Button clicked!');
    };
    const imageStyle = {
        width: '30%', // Adjust the width as needed (e.g., '50%', '200px')
        height: 'auto', // Maintain the original aspect ratio
      };
    return (
        <div className="centered-container">
            <div className="dark-background">
                <h2>Voice Recorder</h2>
                <p>Try Recording Your Sound Now</p>
                <img src={Image} alt="/" style={imageStyle}/>
                <p>To start recording, press the Start Recording button.</p>
                <div>
                {/* <Button
                    onClick={handleClick}
                    className="my-button"
                    label="Start Recording"
                /> */}
                <AudioRecorder/>
            </div>
            </div>
        </div>
    );
}

export default App;
