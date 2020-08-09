import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyBNXZPiZhhGYOpZUUDY3vk_UBCzPlP-i4M",
  authDomain: "expense-tracker-f0f17.firebaseapp.com",
  projectId: "expense-tracker-f0f17",
  storageBucket: "expense-tracker-f0f17.appspot.com",
  messagingSenderId: "951718115688",
  appId: "1:951718115688:web:edc6057575d705c25b7edd",
  measurementId: "G-ZCC7VCSHNC",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
