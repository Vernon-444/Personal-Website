// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjThuJm3mr_ZzbFso4CzblsYwGZYsZPHU",
  authDomain: "website-8986d.firebaseapp.com",
  projectId: "website-8986d",
  storageBucket: "website-8986d.appspot.com",
  messagingSenderId: "843867976216",
  appId: "1:843867976216:web:9c336c2c4176aa25de096d",
  measurementId: "G-W4KL7VMENZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
