export const register = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      let swURL = `${process.env.PUBLIC_URL}/serviceworker.js`;
      navigator.serviceWorker
        .register(swURL)
        .then((reg) => console.log("Success: ", reg.scope))
        .catch((err) => console.log("Failure: ", err));
    });
  }
};
