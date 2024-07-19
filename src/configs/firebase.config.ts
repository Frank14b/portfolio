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
import { ENV_CONFIG } from "./env.config";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  ...ENV_CONFIG.firebase,
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
): Promise<T | undefined | null> => {
  return new Promise((resolve, reject) => {
    onSnapshot(
      q,
      (querySnapshot: QuerySnapshot<DocumentData, DocumentData>) => {
        //
        if (querySnapshot.empty) return resolve(null);
        //
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
