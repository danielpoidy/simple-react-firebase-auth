// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUlOCyIAcjhTqwB6I1n6AK0NjiIS-LU2g",
  authDomain: "fir-auth-yt-ba7db.firebaseapp.com",
  projectId: "fir-auth-yt-ba7db",
  storageBucket: "fir-auth-yt-ba7db.appspot.com",
  messagingSenderId: "427295108867",
  appId: "1:427295108867:web:e694d10b359d689d028336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app   