import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from '../views/startApp';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    startApp(user);
  });
};

export default checkLoginStatus;
