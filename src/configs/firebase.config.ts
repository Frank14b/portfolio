// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  DocumentData,
  FirestoreError,
  Query,
  QuerySnapshot,
  collection,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF5TTuzky0ipR3vJOUdM_epsc3oIaKNFE",
  authDomain: "portfolio-blog-152ac.firebaseapp.com",
  databaseURL: "https://portfolio-blog-152ac-default-rtdb.firebaseio.com",
  projectId: "portfolio-blog-152ac",
  storageBucket: "portfolio-blog-152ac.appspot.com",
  messagingSenderId: "781062077619",
  appId: "1:781062077619:web:4dc96344e90ca69cdc44c6",
  measurementId: "G-ED020WLMGZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const collectionRef = {
  users: collection(db, "users"),
  contacts: collection(db, "contacts"),
};

const getSnapShotQueryAsync = <T>(
  q: Query<DocumentData, DocumentData>
): Promise<T | undefined> => {
  return new Promise((resolve, reject) => {
    onSnapshot(
      q,
      (querySnapshot: QuerySnapshot<DocumentData, DocumentData>) => {
        const result = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return data;
        }) as T;

        return resolve(result);
      },
      (err: FirestoreError) => {
        return reject(err);
      }
    );
  });
};

export { db, app, collectionRef, getSnapShotQueryAsync };
