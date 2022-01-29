import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCClR07pihbkcZfSIvD610qp35zQGmuunM",
    authDomain: "voting-app-8ade9.firebaseapp.com",
    databaseURL: "https://voting-app-8ade9-default-rtdb.firebaseio.com",
    projectId: "voting-app-8ade9",
    storageBucket: "voting-app-8ade9.appspot.com",
    messagingSenderId: "295252946782",
    appId: "1:295252946782:web:0eb3284363a08dea2369cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();