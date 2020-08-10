import React from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import { TransationalList } from "./components/TransationalList";
import { AddTransation } from "./components/AddTransation";
import { GLobalProvider } from "./context/GlobalState";
import { Expenses } from "./components/Expenses";
import firebase from "./push-notification";
// requestFirebaseNotificationPermission()
//   .then((firebaseToken) => {
//     // eslint-disable-next-line no-console
//     console.log(firebaseToken);
//   })
//   .catch((err) => {
//     return err;
//   });
// import { initializeFirebase } from "./push-notification";
function App() {
  React.useEffect(() => {
    requestFirebaseNotificationPermission();
    // const messaging = firebase.messaging();
    // const meg = messaging.requestPermission();
    // const token = messaging.getToken();
    // console.log("token do usuário:", token);
    // // localStorage.setItem("notification", token);
    // return token;
  });
  const requestFirebaseNotificationPermission = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log("token do usuário:", token);
      localStorage.setItem("notification", token);
      return token;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GLobalProvider>
      <div className="container">
        <h1>Expence Tracker App</h1>
        <h2 style={{ marginTop: "0px" }}>
          <Balance />
        </h2>
        <Expenses />
        <div className="tracker-app">
          <h4>
            <TransationalList />
          </h4>
          <hr />
          <AddTransation />
        </div>
      </div>
    </GLobalProvider>
  );
}

export default App;
