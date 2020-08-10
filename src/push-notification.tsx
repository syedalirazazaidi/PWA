import firebase from "firebase";
// export const initializeFirebase = () => {
//   firebase.initializeApp({
//     apiKey: "AIzaSyBNXZPiZhhGYOpZUUDY3vk_UBCzPlP-i4M",
//     authDomain: "expense-tracker-f0f17.firebaseapp.com",
//     projectId: "expense-tracker-f0f17",
//     storageBucket: "expense-tracker-f0f17.appspot.com",
//     messagingSenderId: "951718115688",
//     appId: "1:951718115688:web:edc6057575d705c25b7edd",
//     measurementId: "G-ZCC7VCSHNC",
//   });
// };

var firebaseConfig = {
  apiKey: "AIzaSyBNXZPiZhhGYOpZUUDY3vk_UBCzPlP-i4M",
  authDomain: "expense-tracker-f0f17.firebaseapp.com",
  databaseURL: "https://expense-tracker-f0f17.firebaseio.com",
  projectId: "expense-tracker-f0f17",
  storageBucket: "expense-tracker-f0f17.appspot.com",
  messagingSenderId: "951718115688",
  appId: "1:951718115688:web:edc6057575d705c25b7edd",
  measurementId: "G-ZCC7VCSHNC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
// export const requestFirebaseNotificationPermission = async () => {
//   try {
//     const messaging = firebase.messaging();
//     await messaging.requestPermission();
//     const token = await messaging.getToken();
//     console.log("token do usuário:", token);
//     localStorage.setItem("notification", token);
//     return token;
//   } catch (error) {
//     console.error(error);
//   }
// };
