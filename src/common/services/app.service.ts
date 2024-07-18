"use server";

import { addDoc, orderBy, query, serverTimestamp } from "firebase/firestore";
import { ContactFormDto, EMAIL_TYPE } from "../types";
import {
  replaceVariablesAsync,
  sendEmail,
} from "./email.service";
import {
  collectionRef,
  getSnapShotQueryAsync,
} from "@/configs/firebase.config";
import EmailCore from "@/emails/EmailCore";
import WelcomeEmail from "@/emails/WelcomeEmail";

export const sendGetInTouchEmail = async ({ email }: { email: string }) => {
  try {
    const emailCore = EmailCore();
    const emailBody = WelcomeEmail();
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
    console.log("🚀 ~ sendGetInTouchEmail ~ error:", error)
    return {
      status: false,
      error
    };
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
  //
};

export const sendContactEmailAsync = async ({ email }: { email: string }) => {
  try {
    const emailCore = EmailCore();
    const emailBody = WelcomeEmail();
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
