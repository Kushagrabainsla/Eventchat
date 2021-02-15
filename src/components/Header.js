import {React } from 'react';
import './Header.css';
import 'firebase/auth';
import {auth} from '../firebase';

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
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default Header
