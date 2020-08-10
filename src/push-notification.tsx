import firebase from "firebase";
const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBNXZPiZhhGYOpZUUDY3vk_UBCzPlP-i4M",
    authDomain: "expense-tracker-f0f17.firebaseapp.com",
    projectId: "expense-tracker-f0f17",
    storageBucket: "expense-tracker-f0f17.appspot.com",
    messagingSenderId: "951718115688",
    appId: "1:951718115688:web:edc6057575d705c25b7edd",
    measurementId: "G-ZCC7VCSHNC",
  });
};
export default initializeFirebase;

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("token do usuário:", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
