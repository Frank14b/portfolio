import path from "path";

export const EMAIL_FILE_URL = {
  core: path.join(process.cwd(), "src", "emails", "email-core.html"),
  contact: path.join(process.cwd(), "src", "emails", "welcome.html"),
};
