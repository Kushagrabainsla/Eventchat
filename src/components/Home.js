import {React, useState} from 'react';
import './Home.css';
import firebase from 'firebase/app';
import {db, auth} from '../firebase';
import { ReactMic } from 'react-mic';
import ReactPlayer from 'react-player'

import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import StopIcon from '@material-ui/icons/Stop';


function Home() {

    const messagesRef = db.collection('audio_files');
    const [state, setState] = useState({record: false});
    const [blob, setBlob] = useState({blob_url: ''});

    const sendMessage = async(e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        const blob_url = blob.blob_url;
        await messagesRef.add({
          blob_URL: blob_url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL,
          uid
        })
        console.log('Recording sent to firebase')
    }

    function startRecording() {
        setState({ record: true });
    }
  
    function stopRecording() {
        setState({ record: false });
    }
  
    function onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }
  
    function onStop(recordedBlob) {
        setBlob({ blob_url: recordedBlob.blobURL });
        console.log('recordedBlob is: ', recordedBlob);
    }

    return (
        <div className='container'>
            <ReactPlayer className="react_player" url={auth.currentUser.blob_URL}  playing/>
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
                <StopIcon className="stop_button" onClick={stopRecording}/>
            </div>

            <div className="bottom">
                <CancelIcon className="bottom__logo1"/>
                <SendIcon className="bottom__logo1" onClick={sendMessage} />
            </div>
        </div>

    );
}

export default Home
