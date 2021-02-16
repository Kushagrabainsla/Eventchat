import React from 'react';
import './Home.css';
import {Record} from './Record';
/*import ReactPlayer from 'react-player'*/
import firebase from 'firebase/app';
import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import {db, auth} from '../firebase';

function Home() {

    const messagesRef = db.collection('audio_files');

    const sendMessage = async(e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        await messagesRef.add({
          blob_URL: 'URL_value',
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL,
          uid
        })
        console.log('Recording sent to firebase')
    }
    return (
        <div className='container'>
            {/*<ReactPlayer className="react_player" url={blob_URL}  playing height={360} width={640}/>*/}
            <div className='home'>
                <MicIcon className='mic__icon'/>
                <Record />
            </div>

            <div className="bottom">
                <CancelIcon className="bottom__logo1"/>
                <SendIcon className="bottom__logo1" onClick={sendMessage} />
            </div>
        </div>

    );
}

export default Home
