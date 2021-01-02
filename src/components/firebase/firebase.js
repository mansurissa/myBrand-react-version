import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCnjTqbxzRkLhBrLWHRTcFVlRVySgfBqmo',
  authDomain: 'issa-brand.firebaseapp.com',
  databaseURL: 'https://issa-brand.firebaseio.com',
  projectId: 'issa-brand',
  storageBucket: 'issa-brand.appspot.com',
  messagingSenderId: '668219689985',
  appId: '1:668219689985:web:e15aa3570ec35d8a010400',
  measurementId: 'G-9VJ68M5B4N',
};

firebase.initializeApp(config);

export default firebase;
