import React, { useState, useRef } from 'react';
import Recorder from 'recorder-js';
import axios from 'axios';
import Button from './btn/Button';

const AudioRecorder = () => {
    // const recorder = useRef(new Recorder());
    const recorder = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);

    const startRecording = async () => {
        try {
            let audioContext = new (window.AudioContext || window.webkitAudioContext)();
            recorder.current = new Recorder(audioContext, {
                ondataavailable: (blob) => {
                    setAudioBlob(blob);
                },
            });
            console.log(recorder.current)
            await recorder.current.initStream();
            recorder.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    };

    const stopRecording = () => {
        recorder.current.stop();
        setIsRecording(false);
    };

    const saveRecording = async () => {
        if (audioBlob) {
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.wav');
            try {
                await axios.post('YOUR_API_ENDPOINT_HERE', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert('Recording saved successfully!');
            } catch (error) {
                console.error('Error saving recording:', error);
            }
        }
    };

    const discardRecording = () => {
        if (recorder.current && isRecording) {
            recorder.current.stop();
        }
        setAudioBlob(null);
        setIsRecording(false);
    };

    return (
        <div>
            {isRecording ? (
                <Button
                    onClick={stopRecording}
                    className="my-button"
                    label="Stop Recording"
                />
            ) : (

                <Button
                    onClick={startRecording}
                    className="my-button"
                    label="Start Recording"
                />
            )}
            {audioBlob && (
                <>
                    <Button
                        onClick={saveRecording}
                        className="my-button"
                        label="Save Recording"
                    />
                    <Button
                        onClick={discardRecording}
                        className="my-button"
                        label="Discard Recording"
                    />
                </>
            )}
        </div>
    );
};

export default AudioRecorder;
