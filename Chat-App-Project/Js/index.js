import { SignIn } from "../Pages/Login/signIn.js"

const app = document.querySelector(".container-fluid");

const setScreen = (container) => {
    app.innerHTML = "";
    app.appendChild(container);
}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      location.replace("../Pages/chatUi/index.html")
    } else {
  
        const signInScreen = new SignIn();
        setScreen(signInScreen.container)
    }
  });


export { setScreen }