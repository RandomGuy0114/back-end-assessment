import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeFsOiv2-dSo7IyERYfH8LnIy6-GL_xv4",
  authDomain: "back-end-assessment-3ace3.firebaseapp.com",
  projectId: "back-end-assessment-3ace3",
  storageBucket: "back-end-assessment-3ace3.appspot.com",
  messagingSenderId: "617678365643",
  appId: "1:617678365643:web:aafe4a83a1e451daadcc4e",
  measurementId: "G-9XSDSS2PRB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = firestore(app);

export { app }; //, db
