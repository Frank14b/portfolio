"use server";

const nodemailer = require("nodemailer");
import { EMAIL_CONFIGS } from "@/configs";
import { EMAIL_TYPE, ObjectKeyDto } from "../types";
// Import necessary modules
import fs from "fs";

export const sendEmail = async ({
  subject,
  message,
  attachments,
  type,
  from,
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
  from?: string;
  to?: string;
}) => {
  try {
    let transporter = nodemailer.createTransport({
      host: EMAIL_CONFIGS.options.hostname,
      port: 587, //EMAIL_CONFIGS.options.port,
      auth: {
        user: EMAIL_CONFIGS.options.username,
        pass: EMAIL_CONFIGS.options.password,
      },
      secure: false,
      tls: {
        rejectUnauthorized: false, // only for testing
      },
    });

    // Message object
    let data = {
      from: from ?? EMAIL_CONFIGS.options.from, // 'Andris <andris@kreata.ee>',
      // Comma separated list of recipients
      to: to ?? EMAIL_CONFIGS.options.from, //"Andris Reinman <andris.reinman@gmail.com>",
      bcc: to ?? EMAIL_CONFIGS.options.from, //"andris@ethereal.email",
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
    return info?.messageId;
  } catch (error) {
    return null;
  }
};

// Function to read HTML template file
const readHTMLFileAsync = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
};

// Function to replace variables in HTML template
const replaceVariablesAsync = (
  html: string,
  variables: ObjectKeyDto
): Promise<string> => {
  return new Promise((resolve, _) => {
    let replacedHtml = html;

    Object.keys(variables).map((key) => {
      replacedHtml = replacedHtml.replace(
        new RegExp(`{{${key}}}`, "g"),
        variables[key]
      );
    });

    return resolve(replacedHtml);
  });
};

export { readHTMLFileAsync, replaceVariablesAsync };
