"use server";

import { EMAIL_TYPE } from "../types";
import {
  readHTMLFileAsync,
  replaceVariablesAsync,
  sendEmail,
} from "./email.service";
import { EMAIL_FILE_URL } from "@/configs/app.config";

export const sendGetInTouchEmail = async ({ email }: { email: string }) => {
  try {
    const emailCore = await readHTMLFileAsync(EMAIL_FILE_URL.core);
    const emailBody = await readHTMLFileAsync(EMAIL_FILE_URL.contact);
    //
    const finalHTML = await replaceVariablesAsync(emailBody, {
      title: "Hello Welcome to my page!",
      subTitle: "Hello Welcome to my page!",
      content: "This is some content.",
      welcomeImage: "https://t4.ftcdn.net/jpg/04/03/62/35/360_F_403623508_OhrbkZ1zc2NzB9mN1d2ZcO1WrBDGKsxY.jpg"
    });

    const emailCoreHTML = await replaceVariablesAsync(emailCore, {
      title: "Welcome",
      body: finalHTML,
    });

    return await sendEmail({
      subject: "Hello Welcome to my page!",
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
