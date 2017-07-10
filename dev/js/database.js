import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAIWY986TWISh-HMRS92s5-aj2qug-Eh_Y",
  authDomain: "redux-react-facebook-test.firebaseapp.com",
  databaseURL: "https://redux-react-facebook-test.firebaseio.com",
  projectId: "redux-react-facebook-test",
  storageBucket: "redux-react-facebook-test.appspot.com",
  messagingSenderId: "417670707539"
};

firebase.initializeApp(config);

let database = firebase.database();

export default database;