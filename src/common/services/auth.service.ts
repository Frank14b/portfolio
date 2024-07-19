"use server";

import { query, where } from "firebase/firestore";
import { ResultSignInDto, SignInFormDto } from "../types";
import {
  collectionRef,
  getSnapShotQueryAsync,
} from "@/configs/firebase.config";
import { compareHashedStringAsync, hashStringAsync } from "@/utils/hashing";

export const proceedSignInAsync = async (data: SignInFormDto) => {
  try {
    const q = query(
      collectionRef.users,
      where("email", "==", data.email),
      where("status", "==", 1)
    );

    const result = await getSnapShotQueryAsync<ResultSignInDto[]>(q);

    if (!result)
      return {
        status: false,
        error: "Invalid Credentials",
      };

    const hashed = await hashStringAsync(data.password);
    const isValidPassword = await compareHashedStringAsync(
      hashed.hash,
      result[0].passwordSalt
    );

    if (!isValidPassword) {
      return {
        status: false,
        error: "Invalid Credentials",
      };
    }

    return {
      status: true,
      data: result[0],
    };
  } catch (error) {
    return {
      status: false,
      error: "An error occurred",
    };
  }
  //
};
