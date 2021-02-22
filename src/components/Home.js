import {React, useState} from 'react';
import './Home.css';
import firebase from 'firebase/app';
import {db, auth} from '../firebase';
import { ReactMic } from 'react-mic';

import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Home() {

    const messagesRef = db.collection('audio_files');
    const [state, setState] = useState({ record: false });
    const [blob, setBlob] = useState({ blob_url: '' });
    const [audio, setAudio] = useState({ audio: false });

    const sendMessage = async(e) => {
        e.preventDefault();
        const { displayName, email, uid, photoURL } = auth.currentUser;
        const blob_url = blob.blob_url;
        await messagesRef.add({
          displayName,
          email,
          blob_URL: blob_url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL,
          uid
        })
        console.log('Recording sent to firebase')
    }

    function startRecording() {
        setState({ record: true });
        setAudio({ audio: true });
    }
  
    function stopRecording() {
        setState({ record: false });
        setAudio({ audio: false });
        console.log('audio.audio', audio.audio);
    }
  
    function onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }
  
    function onStop(recordedBlob) {
        setBlob({ blob_url: recordedBlob.blobURL });
        console.log('recordedBlob is: ', recordedBlob);
    }
    function playAudio() {
        console.log('Audio playing....')
        var audio = new Audio(blob.blob_url);
        audio.play();
    }

    return (
        <div className='container'>
            <div className='home'>
                <MicIcon className='mic__icon' onClick={startRecording}/>
                <ReactMic
                    record={state.record}
                    className="sound-wave"
                    onStop={onStop}
                    onData={onData}
                    strokeColor="white"
                    backgroundColor="#4267b2" 
                />
                <StopIcon className={ audio.audio ? "stop_button_visible" : "stop_button_hidden"} onClick={stopRecording}/>
            </div>
            <div className="bottom">
                <PlayArrowIcon className="bottom__logo1" onClick={playAudio}/>
                <SendIcon className="bottom__logo1" onClick={sendMessage} />
            </div>
        </div>

    );
}

export default Home
