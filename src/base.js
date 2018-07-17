import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "redux-in-restaurant.firebaseapp.com",
    databaseURL: "https://redux-in-restaurant.firebaseio.com"

});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };
// this is a default export
export default base;
