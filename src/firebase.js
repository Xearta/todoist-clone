import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyB-SsGgZu1_11M1tWChPxOZhoAAxJ7PWx8',
  authDomain: 'todoist-ddfab.firebaseapp.com',
  databaseURL: 'https://todoist-ddfab.firebaseio.com',
  projectId: 'todoist-ddfab',
  storageBucket: 'todoist-ddfab.appspot.com',
  messagingSenderId: '863160061187',
  appId: '1:863160061187:web:33265242d7581c165f6d36',
});

export { firebaseConfig as firebase };
