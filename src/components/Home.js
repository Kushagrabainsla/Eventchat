import React from 'react';
import './Home.css';

import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

function Home() {
    return (
        <div className='container'>
            <div className='home'>
                <MicIcon className='mic__icon'/>
            </div>

            <div className="bottom">
                <CancelIcon className="bottom__logo1"/>
                <SendIcon className="bottom__logo1"/>
            </div>
        </div>

    );
}

export default Home
