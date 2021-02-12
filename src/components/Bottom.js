import React from 'react';
import './Bottom.css';
import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';

function Bottom() {
    return (
        <div className="bottom">
            <CancelIcon className="bottom__logo1"/>
            <SendIcon className="bottom__logo1"/>
        </div>
    )
}

export default Bottom
