
import firebase from 'firebase/app';
import 'firebase/storage';
  var firebaseConfig = {
    apiKey: "AIzaSyA4rfW-sF-XklRvCZmqluu7Hy-SeV3iMBs",
    authDomain: "mytestapp-efbcb.firebaseapp.com",
    databaseURL: "https://mytestapp-efbcb.firebaseio.com",
    projectId: "mytestapp-efbcb",
    storageBucket: "mytestapp-efbcb.appspot.com",
    messagingSenderId: "255038662674",
    appId: "1:255038662674:web:b116097811af0d467250cb",
    measurementId: "G-VXHGJB35JF"
  };
  firebase.initializeApp(firebaseConfig);

  const storage=firebase.storage().ref("images")

  export {
      storage,firebase as default
  }