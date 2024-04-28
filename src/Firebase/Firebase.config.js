
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,

  apiKey: "AIzaSyCLums2qeKE-dHgGhbax9CbgzFK8tHk2FM",
  authDomain: "travelling-1eb3c.firebaseapp.com",
  projectId: "travelling-1eb3c",
  storageBucket: "travelling-1eb3c.appspot.com",
  messagingSenderId: "595756096846",
  appId: "1:595756096846:web:2dda8c01369bb99435d21f",
};
// console.log(import.meta.env.apiKey , 'ise for aser malfdkj' )

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;