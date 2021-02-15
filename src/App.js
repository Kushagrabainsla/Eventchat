import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase';
import {auth} from './firebase';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className='container'>
      <Header/>
      {user ? <Home /> : <SignIn />}
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className='signin_button' onClick={signInWithGoogle}>
      <h1>Sign in with Google</h1>
    </div>
    /*<button className='signin_button' onClick={signInWithGoogle}>Sign in with Google</button>*/
  )
}

export default App;
