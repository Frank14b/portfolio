import { initializeServerApp } from "firebase/app";

const fireBaseServerConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeServerApp(fireBaseServerConfig, {});
