import {React } from 'react';
import './Header.css';
import 'firebase/auth';
import {auth} from '../firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
    return (
        <div className="header">
            <img className="header__logo1" src="assets/app__logo.png" alt="" />
            <SignOut />
        </div>
    )
}

function SignOut() {
    return auth.currentUser && (
        <div className='signout_button'>
            <ExitToAppIcon onClick={() => auth.signOut()} />
        </div>
    )
}

export default Header
