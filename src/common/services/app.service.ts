"use server";

import { addDoc, orderBy, query, serverTimestamp } from "firebase/firestore";
import { ContactFormDto, EMAIL_TYPE } from "../types";
import {
  readHTMLFileAsync,
  replaceVariablesAsync,
  sendEmail,
} from "./email.service";
import { EMAIL_FILE_URL } from "@/configs/app.config";
import {
  collectionRef,
  getSnapShotQueryAsync,
} from "@/configs/firebase.config";

export const sendGetInTouchEmail = async ({ email }: { email: string }) => {
  try {
    const emailCore = await readHTMLFileAsync(EMAIL_FILE_URL.core);
    const emailBody = await readHTMLFileAsync(EMAIL_FILE_URL.contact);
    //
    const finalHTML = await replaceVariablesAsync(emailBody, {
      title: "",
      subTitle: `Hi ${email},`,
      welcomeImage:
        "https://t4.ftcdn.net/jpg/04/03/62/35/360_F_403623508_OhrbkZ1zc2NzB9mN1d2ZcO1WrBDGKsxY.jpg",
    });

    const emailCoreHTML = await replaceVariablesAsync(emailCore, {
      title: "Welcome",
      body: finalHTML,
    });

    return await sendEmail({
      subject: "Your Weekly Newsletter: Stay Informed and Inspired!",
      message: {
        isHtml: true,
        content: emailCoreHTML,
      },
      type: EMAIL_TYPE.CONTACT,
      to: email,
    });
  } catch (error) {
    return null;
  }
};

export const getUsersAsync = async () => {
  const q = query(collectionRef.users, orderBy("email", "desc"));
  return await getSnapShotQueryAsync<any>(q);
};

export const proceedSaveContactAsync = async (data: ContactFormDto) => {
  try {
    const doc = await addDoc(collectionRef.contacts, {
      ...data,
      timestamp: serverTimestamp(),
    });
    if (doc?.id) {
      sendContactEmailAsync({ email: data.email });
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const sendContactEmailAsync = async ({ email }: { email: string }) => {
  try {
    const emailCore = await readHTMLFileAsync(EMAIL_FILE_URL.core);
    const emailBody = await readHTMLFileAsync(EMAIL_FILE_URL.contact);
    //
    const finalHTML = await replaceVariablesAsync(emailBody, {
      title: "",
      subTitle: `Hi`,
      welcomeImage:
        "https://t4.ftcdn.net/jpg/04/03/62/35/360_F_403623508_OhrbkZ1zc2NzB9mN1d2ZcO1WrBDGKsxY.jpg",
    });

    const emailCoreHTML = await replaceVariablesAsync(emailCore, {
      title: "Welcome",
      body: finalHTML,
    });

    return await sendEmail({
      subject: "Thank You for contacting me!",
      message: {
        isHtml: true,
        content: emailCoreHTML,
      },
      type: EMAIL_TYPE.CONTACT,
      to: email,
    });
  } catch (error) {
    return null;
  }
};
