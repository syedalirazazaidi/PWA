importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");
// firebase.initializeApp({
//   messagingSenderId: "951718115688",
// });

// const initMessaging = firebase.messaging();
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceworker.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

firebase.initializeApp({
  apiKey: "AIzaSyBNXZPiZhhGYOpZUUDY3vk_UBCzPlP-i4M",
  authDomain: "expense-tracker-f0f17.firebaseapp.com",
  projectId: "expense-tracker-f0f17",
  storageBucket: "expense-tracker-f0f17.appspot.com",
  messagingSenderId: "951718115688",
  appId: "1:951718115688:web:edc6057575d705c25b7edd",
  measurementId: "G-ZCC7VCSHNC",
});

const initMessaging = firebase.messaging();
