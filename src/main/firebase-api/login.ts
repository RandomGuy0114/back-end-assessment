import { getAuth, signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
const auth = getAuth();

const login = document.querySelector("#login");

login?.addEventListener("click", () => {
  const email = document.querySelector("#email-login").value;
  const password = document.querySelector("#password-login").value;
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const userCrdntl = userCredential.user;
      console.log(userCrdntl)
      const email = document.querySelector("#email-login");
      const password = document.querySelector("#password-login");

      email.value = "";
      password.value = "";

      alert('Login successfully!!!')
      const user = auth.currentUser;
      onAuthStateChanged(auth, user => {
        if (user) {
            alert(user.email)
          const uid = user.uid;
          window.location.href = "../../../home.html";
          // ...
        } else {
          // User is signed out
          // ...
        }
    })
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + errorMessage)
    });
});
