import { addDoc, query, serverTimestamp } from "firebase/firestore";
import { SignInFormDto } from "../types";
import { collectionRef } from "@/configs/firebase.config";

export const proceedSignInAsync = async (data: SignInFormDto) => {
  try {
    const q = query(collectionRef.users);

    return false;
  } catch (error) {
    return false;
  }
  //
};