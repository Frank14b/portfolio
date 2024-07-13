import { ENV_CONFIG } from "./";

const options = {
  from: "",
  ...ENV_CONFIG.SMTP,
};

export const EMAIL_CONFIGS = {
  options,
};