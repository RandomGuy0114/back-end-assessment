import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase-config";
const auth = getAuth();

const register = document.querySelector("#register");

register?.addEventListener("click", () => {
  const email = document.querySelector("#email-register").value;
  const password = document.querySelector("#password-register").value;

  // console.log(email,password,auth)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      const email = document.querySelector("#email-register");
      const password = document.querySelector("#password-register");

      email.value = "";
      password.value = "";
      alert("Register successfully!!!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + errorMessage)
      // ..
    });
});
