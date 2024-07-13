"use server";

const nodemailer = require("nodemailer");
import { EMAIL_CONFIGS } from "@/utils";
import { EMAIL_TYPE } from "../types";

export const sendEmail = async ({
  subject,
  message,
  attachments,
  type,
  to,
}: {
  subject: string;
  message: {
    isHtml: boolean;
    content: string;
  };
  attachments?: [
    {
      filename: string;
      content: Buffer;
      cid?: string;
    }
  ];
  type: EMAIL_TYPE;
  to: string;
}) => {
  try {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      sendmail: true,
      newline: "windows",
      logger: true,
    });

    // Message object
    let data = {
      from: EMAIL_CONFIGS.options.from, // 'Andris <andris@kreata.ee>',
      // Comma separated list of recipients
      to: to, //"Andris Reinman <andris.reinman@gmail.com>",
      bcc: "andris@ethereal.email",
      // Subject of the message
      subject: subject, //"Nodemailer is unicode friendly ✔",
      // plaintext body
      text: !message.isHtml ? message.content : "",
      // HTML body
      html: message.isHtml ? message.content : "",
      // An array of attachments
      attachments: attachments ?? [],
    };

    let info = await transporter.sendMail(data);
    console.log("Message sent successfully as %s", info.messageId);
  } catch (error) {
    console.log("🚀 ~ error:", error)
  }
};
