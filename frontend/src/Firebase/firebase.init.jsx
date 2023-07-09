import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:process.env.REACT_AOO_apiKey,
  authDomain:process.env.REACT_AOO_authDomain,
  projectId:process.env.REACT_AOO_projectId,
  storageBucket:process.env.REACT_AOO_storageBucket,
  messagingSenderId:process.env.REACT_AOO_messagingSenderId,
  appId:process.env.REACT_AOO_appId,
};

const app = initializeApp(firebaseConfig);
